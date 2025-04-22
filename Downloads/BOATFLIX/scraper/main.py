import os
import requests
from bs4 import BeautifulSoup
from supabase import create_client, Client
import datetime

# 環境変数からSupabase情報取得
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")

# Supabaseクライアント初期化
def get_supabase_client() -> Client:
    if not SUPABASE_URL or not SUPABASE_KEY:
        raise RuntimeError("SupabaseのURL/KEYが設定されていません")
    return create_client(SUPABASE_URL, SUPABASE_KEY)

# サンプル: 大村競艇場の今日のレース一覧を取得（boatrace.jpの構造に応じて適宜修正）
def fetch_race_list():
    url = "https://www.boatrace.jp/owsp/sp/race/index?jcd=24&hd=20250422"  # サンプル（大村、日付固定）
    res = requests.get(url)
    res.encoding = res.apparent_encoding
    soup = BeautifulSoup(res.text, "html.parser")
    races = []
    for race in soup.select(".race_table1 tr")[1:]:
        tds = race.find_all("td")
        if len(tds) < 3:
            continue
        race_no = tds[0].get_text(strip=True)
        start_time = tds[1].get_text(strip=True)
        title = tds[2].get_text(strip=True)
        races.append({
            "race_no": race_no,
            "start_time": start_time,
            "title": title,
            "stadium": "大村",
            "race_date": "2025-04-22"
        })
    return races

# Supabaseに保存
def save_races_to_supabase(races):
    supabase = get_supabase_client()
    for race in races:
        supabase.table("races").insert(race).execute()

if __name__ == "__main__":
    races = fetch_race_list()
    print(f"取得レース数: {len(races)}")
    if races:
        save_races_to_supabase(races)
        print("Supabaseに保存しました")
