create view all_msg as select msgs.*, basics.name, basics.workdate, basics.count, basics.days, basics.used, basics.fk_unit, basics.grade, basics.phone0, basics.phone1, units.unit from msgs inner join basics on msgs.fk_basic=basics.id inner join units on fk_unit=units.id where state>=0;
create view all_people as select basics.*, units.unit from basics inner join units on basics.fk_unit=units.id; 
create view approved as select fk_basic, name, date0, date1, place, reason from all_msg where state=4;
insert into basics (name, workdate, fk_unit, "createdAt","updatedAt") values ('alice','2002-09-01',1,now(),now()),('bob','2002-09-01',1,now(),now()),('tom','2002-09-01',2,now(),now());
insert into units (unit, "createdAt", "updatedAt") values ('gruop1',now(),now()),('group2',now(),now());
insert into msgs (fk_basic, date0, date1, place, reason, state, "createdAt","updatedAt") values (1,'2021-09-20','2021-10-01','Beijing','Good',0,now(),now()),(2,'2021-01-20','2021-07-01','Tianjin','Badd',0,now(),now()),(3,'2021-03-01','2021-02-11','Hainan','walk',0,now(),now());
