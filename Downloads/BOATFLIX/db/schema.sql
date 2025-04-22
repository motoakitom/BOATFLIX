create table if not exists races (
    id serial primary key,
    race_no varchar(8) not null,
    start_time varchar(16),
    title text,
    stadium varchar(32),
    race_date date,
    created_at timestamp with time zone default timezone('utc'::text, now())
);