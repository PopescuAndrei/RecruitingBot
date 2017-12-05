-- CLEAR DB SQL
DELETE FROM app_user;
DELETE FROM candidate_position_score;
DELETE FROM position_skill;
DELETE FROM position;
DELETE FROM user_candidate_rating;
DELETE FROM user_candidate_like;
DELETE FROM user_candidate_comment;
DELETE FROM chat_message;
DELETE FROM interview_progress;
DELETE FROM candidate_education;
DELETE FROM candidate_experience;
DELETE FROM candidate_interest;
DELETE FROM candidate_language;
DELETE FROM candidate_skill;
DELETE FROM candidate;
DELETE FROM app_user;

DELETE FROM question_reply;
DELETE FROM question;

DELETE FROM position_skill;
DELETE FROM position;

DELETE FROM language;
DELETE FROM skill;
DELETE FROM question;

-- INIT POP
insert into skill(name) VALUES ('Java');
insert into skill(name) VALUES ('C#');
insert into skill(name) VALUES ('Spring');

insert into language (name) VALUES ('English');
insert into language (name) VALUES ('Spanish');
insert into language (name) VALUES ('German');
insert into language (name) VALUES ('Japanese');
insert into language (name) VALUES ('French');

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
INSERT INTO question_reply(reply, question_id) VALUES ('That is awesome. If i would kthis, i would have demanded even more money', 7);

INSERT INTO app_user(avatar, email, first_name, last_name, password) VALUES ('assets/img/faces/mCandidate1.png', 'andrei.popescu93@gmail.com', 'Andrei', 'Popescu', 'pass');

INSERT INTO candidate(age, avatar, color, email, facebook_uuid, first_name, gender, last_name, phone) VALUES (24, 'https://scontent.xx.fbcdn.net/v/t31.0-1/24059442_1482387538496893_3638283577426871142_o.jpg?oh=6d4365ec1eb8c4ac6117d4a83b8ace9c&oe=5A9685DD', '#449C76', 'andrei.popescu93@gmail.com', '1619661654712376', 'Andrei', 'male', 'Popescu', '0745314873');
INSERT INTO candidate(age, avatar, color, email, facebook_uuid, first_name, gender, last_name, phone) VALUES (18, 'assets/img/faces/fCandidate4.png', '#DD8335', 'narcisa.brailoiu@gmail.com', '123212', 'Narcisa', 'female', 'Brailoiu', '0767940309');

INSERT INTO candidate_education(grade, institution, major, period_from, period_to, candidate_id) VALUES (9.1, 'UPB', 'Computer Science', Date('09/01/2012'), Date('06/01/2016'), (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO candidate_education(grade, institution, major, period_from, period_to, candidate_id) VALUES (9.5, 'Dinicu Golescu', 'Mathematics', Date('08/01/2008'), Date('06/01/2012'), (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO candidate_education(grade, institution, major, period_from, period_to, candidate_id) VALUES (9.5, 'ASE', 'Cybernetics', Date('09/01/2012'), Date('06/01/2016'), (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO candidate_education(grade, institution, major, period_from, period_to, candidate_id) VALUES (9.9, 'Spiru Haret', 'Mathematics', Date('08/01/2008'), Date('06/01/2012'), (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));

INSERT INTO candidate_experience(company, period_from, period_to, title, candidate_id) VALUES ('XlTeam', Date('06/01/2013'), Date('10/01/2013'), 'Android Developer', (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO candidate_experience(company, period_from, period_to, title, candidate_id) VALUES ('Teamnet', Date('06/01/2014'), Date('10/01/2014'), 'Software Developer', (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO candidate_experience(company, period_from, title, candidate_id) VALUES ('Ericsson', Date('02/01/2015'), 'Software Engineer', (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));

INSERT INTO candidate_experience(company, period_from, period_to, title, candidate_id) VALUES ('Ortec', Date('06/01/2013'), Date('12/01/2013'), 'Javascript Developer', (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO candidate_experience(company, period_from, title, candidate_id) VALUES ('Reply', Date('06/01/2015'), 'Consultant', (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));

INSERT INTO candidate_interest(name, candidate_id) VALUES ('Basketball', (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO candidate_interest(name, candidate_id) VALUES ('Hacking', (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO candidate_interest(name, candidate_id) VALUES ('Travel', (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO candidate_interest(name, candidate_id) VALUES ('Programming', (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO candidate_interest(name, candidate_id) VALUES ('Teaching', (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO candidate_interest(name, candidate_id) VALUES ('Gaming', (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO candidate_interest(name, candidate_id) VALUES ('Makeup', (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO candidate_interest(name, candidate_id) VALUES ('Partying', (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO candidate_interest(name, candidate_id) VALUES ('Drinking', (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO candidate_interest(name, candidate_id) VALUES ('Sleeping', (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));

INSERT INTO candidate_language(speaking, understanding, writing, candidate_id, language_id) VALUES (100, 100, 100, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id from language where name like '%English%'));
INSERT INTO candidate_language(speaking, understanding, writing, candidate_id, language_id) VALUES (40, 20, 100, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id from language where name like '%German%'));
INSERT INTO candidate_language(speaking, understanding, writing, candidate_id, language_id) VALUES (40, 40, 60, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id from language where name like '%French%'));
INSERT INTO candidate_language(speaking, understanding, writing, candidate_id, language_id) VALUES (100, 100, 100, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'), (SELECT id from language where name like '%English%'));
INSERT INTO candidate_language(speaking, understanding, writing, candidate_id, language_id) VALUES (40, 40, 60, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'), (SELECT id from language where name like '%French%'));

INSERT INTO candidate_skill(level, candidate_id, skill_id) VALUES (100, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id from skill where name LIKE ('%Java%')));
INSERT INTO candidate_skill(level, candidate_id, skill_id) VALUES (80, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id from skill where name LIKE ('%Spring%')));
INSERT INTO candidate_skill(level, candidate_id, skill_id) VALUES (50, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id from skill where name LIKE ('%C#%')));
INSERT INTO candidate_skill(level, candidate_id, skill_id) VALUES (80, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'), (SELECT id from skill where name LIKE ('%Java%')));
INSERT INTO candidate_skill(level, candidate_id, skill_id) VALUES (60, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'), (SELECT id from skill where name LIKE ('%Spring%')));
INSERT INTO candidate_skill(level, candidate_id, skill_id) VALUES (70, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'), (SELECT id from skill where name LIKE ('%C#%')));

INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/01/2017'), FALSE, 'Hello', 1, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/02/2017'), TRUE, 'Hello. Nice to meet you. How can I help you?', 2, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/03/2017'), FALSE, 'I would like to know about the open Java Position', 3, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/04/2017'), TRUE, 'Here is a list of the available position. Read them and tell me which one are you interested in.', 4, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/05/2017'), FALSE, 'I am interested in the Senior Java Architect One', 5, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/06/2017'), TRUE, 'Ok. So...how should we proceed? Do you want to tell me about your experience or should I ask you specific questions?', 6, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/07/2017'), FALSE, 'I will answer your questions.', 7, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/08/2017'), TRUE, 'What is your education?', 8, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/09/2017'), FALSE, 'I have studied in UCLA for 3 years as a Computer Science student. I have graduated with 10 actually.', 9, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/10/2017'), TRUE, 'That is great. Anything else?', 10, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/11/2017'), FALSE, 'I have also worked for Teamnet as a java developer for 2 years.', 11, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/12/2017'), TRUE, 'Sounds like you fit. I will notice my colleagues and they will get back to you! Have a nice day!', 12, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/13/2017'), FALSE, 'Ok. You to! And thank you for your time!', 13, (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));

INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/01/2017'), FALSE, 'Hello', 1, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/02/2017'), TRUE, 'Hello. Nice to meet you. How can I help you?', 2, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/03/2017'), FALSE, 'I would like to know about the open Java Position', 3, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/04/2017'), TRUE, 'Here is a list of the available position. Read them and tell me which one are you interested in.', 4, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/05/2017'), FALSE, 'I am interested in the Senior Java Architect One', 5, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/06/2017'), TRUE, 'Ok. So...how should we proceed? Do you want to tell me about your experience or should I ask you specific questions?', 6, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/07/2017'), FALSE, 'I will answer your questions.', 7, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/08/2017'), TRUE, 'What is your education?', 8, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/09/2017'), FALSE, 'I have studied in UCLA for 3 years as a Computer Science student. I have graduated with 10 actually.', 9, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/10/2017'), TRUE, 'That is great. Anything else?', 10, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/11/2017'), FALSE, 'I have also worked for Teamnet as a java developer for 2 years.', 11, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/12/2017'), TRUE, 'Sounds like you fit. I will notice my colleagues and they will get back to you! Have a nice day!', 12, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));
INSERT INTO chat_message(creation_date, from_robot, message, position, candidate_id) VALUES (Date('01/13/2017'), FALSE, 'Ok. You to! And thank you for your time!', 13, (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));

INSERT INTO user_candidate_like(liked, app_user_id, candidate_id) VALUES (TRUE, (SELECT id FROM app_user WHERE email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id FROM candidate WHERE email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO user_candidate_like(liked, app_user_id, candidate_id) VALUES (TRUE, (SELECT id FROM app_user WHERE email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id FROM candidate WHERE email LIKE '%narcisa.brailoiu@gmail.com%'));

INSERT INTO user_candidate_comment(comment, creation_date, app_user_id, candidate_id) VALUES ('This is the best candidate we ever had.', Date('06/06/2017'), (SELECT id FROM app_user WHERE email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO user_candidate_comment(comment, creation_date, app_user_id, candidate_id) VALUES ('Never seen someone like him', Date('07/06/2017'), (SELECT id FROM app_user WHERE email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO user_candidate_comment(comment, creation_date, app_user_id, candidate_id) VALUES ('She is awesome indeed.', Date('07/06/2017'), (SELECT id FROM app_user WHERE email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));

INSERT INTO user_candidate_rating(rating, app_user_id, candidate_id) VALUES (5, (SELECT id FROM app_user WHERE email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id from candidate where email LIKE '%andrei.popescu93@gmail.com%'));
INSERT INTO user_candidate_rating(rating, app_user_id, candidate_id) VALUES (5, (SELECT id FROM app_user WHERE email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id from candidate where email LIKE '%narcisa.brailoiu@gmail.com%'));

INSERT INTO position(creation_date, description, image, name) VALUES (Date('08/08/2017'), 'Software Architect for Java Enterprise Solution. Much experience needed.', 'assets/img/pos-bg/3.png', 'Software Arch.');
INSERT INTO position(creation_date, description, image, name) VALUES (Date('08/08/2017'), 'Software Developer for Java Enterprise Solution. Not so much experience needed.', 'assets/img/pos-bg/5.png', 'Software Dev');

INSERT INTO position_skill(level, position_id, skill_id) VALUES (80, (SELECT id FROM position WHERE name LIKE '%Software Arch.%'), (SELECT id FROM skill WHERE name LIKE '%Java%'));
INSERT INTO position_skill(level, position_id, skill_id) VALUES (60, (SELECT id FROM position WHERE name LIKE '%Software Arch.%'), (SELECT id FROM skill WHERE name LIKE '%Spring%'));
INSERT INTO position_skill(level, position_id, skill_id) VALUES (60, (SELECT id FROM position WHERE name LIKE '%Software Dev%'), (SELECT id FROM skill WHERE name LIKE '%Java%'));

INSERT INTO candidate_position_score(score, candidate_id, position_id) VALUES (4.1, (SELECT id FROM candidate WHERE email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id FROM position WHERE name LIKE '%Software Arch.%'));
INSERT INTO candidate_position_score(score, candidate_id, position_id) VALUES (4.8, (SELECT id FROM candidate WHERE email LIKE '%andrei.popescu93@gmail.com%'), (SELECT id FROM position WHERE name LIKE '%Software Dev%'));
INSERT INTO candidate_position_score(score, candidate_id, position_id) VALUES (3.6, (SELECT id FROM candidate WHERE email LIKE '%narcisa.brailoiu@gmail.com%'), (SELECT id FROM position WHERE name LIKE '%Software Arch.%'));
INSERT INTO candidate_position_score(score, candidate_id, position_id) VALUES (4.5, (SELECT id FROM candidate WHERE email LIKE '%narcisa.brailoiu@gmail.com%'), (SELECT id FROM position WHERE name LIKE '%Software Dev%'));