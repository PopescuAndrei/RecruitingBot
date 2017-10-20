-- CLEAR DB SQL
DELETE FROM INTERVIEW_PROGRESS;
DELETE FROM CANDIDATE_EXPERIENCE;
DELETE FROM CANDIDATE_INTEREST;
DELETE FROM CANDIDATE_LANGUAGE;
DELETE FROM CANDIDATE_SKILL;
DELETE FROM CANDIDATE_EDUCATION;
DELETE FROM CANDIDATE;

-- INIT POP
insert into skill(name) values ('Java');
insert into skill(name) values ('C#');
insert into skill(name) values ('Spring');


insert into language (name) values ('English');
insert into language (name) values ('Spanish');
insert into language (name) values ('German');
insert into language (name) values ('Japanese');

INSERT INTO question(query, position) VALUES ('Hello :candidate.name! Nice to meet you. I am here to ask you some questions. What is your email?', 1);
INSERT INTO question_reply(reply, question_id) VALUES ('Thanks', 1);

INSERT INTO question(query, position) VALUES ('That is awesome. And now...are you a man or a woman?', 2);
INSERT INTO question_reply(reply, question_id) VALUES ('Ok. Noted', 2);

INSERT INTO question(query, position) VALUES ('Let us talk about education. Were you a student? Where and what did you study?', 3);
INSERT INTO question_reply(reply, question_id) VALUES ('That is great! Anywhere else?', 3);
INSERT INTO question_reply(reply, question_id) VALUES ('Well, that is awesome. Do you have anything else?', 3);
INSERT INTO question_reply(reply, question_id) VALUES ('Cool. Aaaand...:institution.name is the only you studied?', 3);

INSERT INTO question(query, position) VALUES ('Next on the list is experience. Where and when did you work? What position did you held over there?', 4);
INSERT INTO question_reply(reply, question_id) VALUES ('Great company. Anything else?', 4);
INSERT INTO question_reply(reply, question_id) VALUES ('We only had good people from over there. Do you have any other past workplaces?', 4);

INSERT INTO question(query, position) VALUES ('What are your interests?', 5);
INSERT INTO question_reply(reply, question_id) VALUES ('I like that too, but I am sure you like more things...Tell me :)', 5);
INSERT INTO question_reply(reply, question_id) VALUES ('Maybe we will go together some time. Anything else?', 5);

INSERT INTO question(query, position) VALUES ('What languages do you know', 6);
INSERT INTO question_reply(reply, question_id) VALUES ('Great. Any others?', 6);
INSERT INTO question_reply(reply, question_id) VALUES ('Super. I know it too! Anything else?', 6);

INSERT INTO question(query, position) VALUES ('About skills...tell me what technologies do you know and what is your level of knowledge for each', 7);
INSERT INTO question_reply(reply, question_id) VALUES ('Great. Any others?', 7);
INSERT INTO question_reply(reply, question_id) VALUES ('Super. I know it too! Anything else?', 7);
INSERT INTO question_reply(reply, question_id) VALUES ('That is awesome. If i would knew this, i would have demanded even more money', 7);