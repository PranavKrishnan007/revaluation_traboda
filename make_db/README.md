# here we go learning about dbs....

This is a task where we had to learn about the structure of tables and how to make relations between them. 🙂

<img src="https://user-images.githubusercontent.com/89575829/212547129-4fd5c17f-7ff7-47e2-9acf-24619d92b6cc.jpg" width=600 height=400/>

_________
### The Table Creation
1. Participant's info table.
```
create table participants (
  p_id int, 
  name varchar(255) NOT NULL, 
  email varchar(255) NOT NULL, 
  phone int(10) NOT NULL,
  dob DATE, 
  city varchar(255), 
  state varchar(255), 
  country varchar(255), 
  Gender VARCHAR(6) NOT NULL CHECK (Gender IN ('Male', 'Female')),
  pmode varchar(7) check (pmode IN ("online", "offline")),
  primary key (p_id)
)
```
2. Event List table.
```
create table events (
  eventID int, 
  event_name varchar(255) check (event_name in ("2x2", "3x3", "4x4", "5x5", "pyraminx", "mirror", "skewb")),
  primary key (eventID)
)
```
3. Age groups table. 
```
create table age_groups (
  ageID int, 
  ages varchar(255) check (ages in ("under 6", "6-8", "8-10", "10-12", "12+", "Parents & Mentors")),
  primary key (ageID)
)
```
4. Participant event table. 
```
create table participant_event (
  p_id int, 
  e_id int, 
  FOREIGN KEY (p_id) REFERENCES participants(p_id), 
  FOREIGN KEY (e_id) REFERENCES events(eventID)
);
```
5. Scores table. 
```
create table scores (
  scoreID int, 
  p_id int, 
  e_id int, 
  a_id int,
  duration TIME,
  FOREIGN KEY (p_id) REFERENCES participants(p_id), 
  FOREIGN KEY (e_id) REFERENCES events(eventID),
  FOREIGN KEY (a_id) REFERENCES age_groups(ageID),
  primary key (scoreID)
);
```
__________
### The Queries
-----------
1. View participants for a given age group
```
select DISTINCT participants.name, age_groups.ages from age_groups
inner join scores on scores.a_id = age_groups.ageID
inner join participants on participants.p_id = scores.p_id
where age_groups.ages = "[desired_age_group]"
```

2. View participants for a given category
```
select participants.name, events.event_name from events
inner join participant_event on participant_event.e_id = events.eventID
inner join participants on participants.p_id = participant_event.p_id
where events.event_name = "[desired_event_name]"
```

3. Search a participant using name or phone number
```
select * 
from participants 
where name = "[desired_name_of_participant]" 
or phone = [desired_phone_number_in_int]
```

4. View scoreboard for a given age group for a given event
```
select age_groups.ages, events.event_name, scores.duration from events
inner join scores on events.eventID = scores.e_id
inner join age_groups on age_groups.ageID = scores.a_id
where event_name = "[desired_event_name]" and ages = "[desired_age_group]"
```
(participant information can also be queried as show in 5th and 6th query)

5. View top participant across events for a given age group
```
select participants.name, events.event_name, age_groups.ages, scores.duration from age_groups
inner join scores on age_groups.ageID = scores.a_id
inner JOIN participants on participants.p_id = scores.p_id
inner join events on events.eventID = scores.e_id
where age_groups.ages = "[desired_age_group]"
group by events.eventID
order by scores.duration ASC 
```

6. View top participants in each age group for a given event
```
select participants.name, events.event_name, age_groups.ages, scores.duration from age_groups
inner join scores on age_groups.ageID = scores.a_id
inner JOIN participants on participants.p_id = scores.p_id
inner join events on events.eventID = scores.e_id
where events.event_name = "[desired_event_name]"
group by age_groups.ages
order by scores.duration ASC 
```
___________
