--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: art; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.art (
    sid integer NOT NULL,
    aid integer NOT NULL
);


ALTER TABLE public.art OWNER TO postgres;

--
-- Name: artists; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.artists (
    aid integer NOT NULL,
    name text NOT NULL,
    dob date NOT NULL,
    rate numeric NOT NULL,
    bio text
);


ALTER TABLE public.artists OWNER TO postgres;

--
-- Name: artists_aid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.artists_aid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.artists_aid_seq OWNER TO postgres;

--
-- Name: artists_aid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.artists_aid_seq OWNED BY public.artists.aid;


--
-- Name: forms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.forms (
    cid integer NOT NULL,
    compound text NOT NULL,
    study text NOT NULL,
    study_type text NOT NULL,
    country text NOT NULL,
    participant text NOT NULL,
    actual_subjects integer NOT NULL,
    expected_subjects integer NOT NULL,
    active_subjects integer NOT NULL,
    amendments integer NOT NULL,
    phase text NOT NULL
);


ALTER TABLE public.forms OWNER TO postgres;

--
-- Name: forms12; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.forms12 (
    cid integer NOT NULL,
    compound text NOT NULL,
    study text NOT NULL,
    study_type text NOT NULL,
    country text NOT NULL,
    participant text NOT NULL,
    actual_subjects integer NOT NULL,
    expected_subjects integer NOT NULL,
    active_subjects integer NOT NULL,
    amendments integer NOT NULL,
    phase text NOT NULL
);


ALTER TABLE public.forms12 OWNER TO postgres;

--
-- Name: forms12_cid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.forms12_cid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.forms12_cid_seq OWNER TO postgres;

--
-- Name: forms12_cid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.forms12_cid_seq OWNED BY public.forms12.cid;


--
-- Name: forms_cid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.forms_cid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.forms_cid_seq OWNER TO postgres;

--
-- Name: forms_cid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.forms_cid_seq OWNED BY public.forms.cid;


--
-- Name: songs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.songs (
    sid integer NOT NULL,
    song text NOT NULL,
    dor text NOT NULL,
    counting integer DEFAULT 1 NOT NULL,
    rate integer DEFAULT 4 NOT NULL
);


ALTER TABLE public.songs OWNER TO postgres;

--
-- Name: songs_sid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.songs_sid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.songs_sid_seq OWNER TO postgres;

--
-- Name: songs_sid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.songs_sid_seq OWNED BY public.songs.sid;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    uid integer NOT NULL,
    uname text NOT NULL,
    uemail text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_uid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_uid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_uid_seq OWNER TO postgres;

--
-- Name: users_uid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_uid_seq OWNED BY public.users.uid;


--
-- Name: artists aid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artists ALTER COLUMN aid SET DEFAULT nextval('public.artists_aid_seq'::regclass);


--
-- Name: forms cid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms ALTER COLUMN cid SET DEFAULT nextval('public.forms_cid_seq'::regclass);


--
-- Name: forms12 cid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms12 ALTER COLUMN cid SET DEFAULT nextval('public.forms12_cid_seq'::regclass);


--
-- Name: songs sid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.songs ALTER COLUMN sid SET DEFAULT nextval('public.songs_sid_seq'::regclass);


--
-- Name: users uid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN uid SET DEFAULT nextval('public.users_uid_seq'::regclass);


--
-- Data for Name: art; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.art (sid, aid) FROM stdin;
34	25
35	26
35	27
37	17
38	18
39	21
39	22
39	23
40	19
42	26
42	23
43	17
43	22
44	24
45	19
45	18
46	16
46	20
\.


--
-- Data for Name: artists; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.artists (aid, name, dob, rate, bio) FROM stdin;
16	Arijit Singh	1987-04-25	5	Romantic songs
17	Sanam Puri	1992-06-30	4	Listen to soulful Sanam for his melodius songs
18	Amit Trivedi	1990-01-01	4	Passionate singer
19	Akhil 	1991-03-05	5	Punjabi Singer
20	Dhvani Bhanushali	1998-03-23	4	Young sensation
21	Neha Kakkar 	1987-12-08	4	Neha Kakkar best 
22	Tony Kakkar	1984-05-04	3	Coca-cola tuuuuuuu Dheeme dheeme
23	Guru Randhawa	1992-06-28	5	punjabi pop singer
24	Atif Aslam	1983-07-04	5	Soulful singer 
25	Armaan Malik	1995-05-05	4	Young gun
26	Jasmine Sandlas	1988-09-13	3	tomboy
27	Garry Sandhu	1984-04-04	3	Punjabi POP
28	Bhavya Chopra	2020-04-05	4	Punjabi Singer
29	BT	2020-04-26	4	korean
30	Sukh	2020-03-30	1	Hey guys
31	himmat	2020-04-20	1	hello world
32	Dev Nene	2020-03-29	2	hello friends
\.


--
-- Data for Name: forms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.forms (cid, compound, study, study_type, country, participant, actual_subjects, expected_subjects, active_subjects, amendments, phase) FROM stdin;
\.


--
-- Data for Name: forms12; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.forms12 (cid, compound, study, study_type, country, participant, actual_subjects, expected_subjects, active_subjects, amendments, phase) FROM stdin;
\.


--
-- Data for Name: songs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.songs (sid, song, dor, counting, rate) FROM stdin;
34	Tum Hi ho	2013-06-08	1	5
35	Bol do naa zara	2016-09-25	1	4
37	Dota 2	2020-04-07	1	5
36	Illegal Weapons	2018-09-06	3	1
38	Naina Da kASOOR	2019-08-15	1	5
39	Laila Laila	2019-09-10	1	4
40	Coca-Cola	2020-01-08	1	5
42	D3	2020-08-03	1	4
43	D4	2020-09-04	1	4
44	D5	2020-08-04	1	3
41	Dota1	2020-01-01	2	3
45	d6	2019-09-04	1	5
46	Dilliwaali Girlfriend	2020-09-07	1	5
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (uid, uname, uemail) FROM stdin;
3	Bhavya	bcchopra10@gmail.com
4	newuser	newuser@gmail.com
\.


--
-- Name: artists_aid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.artists_aid_seq', 32, true);


--
-- Name: forms12_cid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.forms12_cid_seq', 1, false);


--
-- Name: forms_cid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.forms_cid_seq', 1, false);


--
-- Name: songs_sid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.songs_sid_seq', 47, true);


--
-- Name: users_uid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_uid_seq', 5, true);


--
-- Name: art art_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.art
    ADD CONSTRAINT art_pkey PRIMARY KEY (sid, aid);


--
-- Name: artists artists_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artists
    ADD CONSTRAINT artists_pkey PRIMARY KEY (aid);


--
-- Name: forms12 forms12_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms12
    ADD CONSTRAINT forms12_pkey PRIMARY KEY (cid);


--
-- Name: forms forms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms
    ADD CONSTRAINT forms_pkey PRIMARY KEY (cid);


--
-- Name: songs songs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.songs
    ADD CONSTRAINT songs_pkey PRIMARY KEY (sid);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (uid);


--
-- Name: art art_aid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.art
    ADD CONSTRAINT art_aid_fkey FOREIGN KEY (aid) REFERENCES public.artists(aid);


--
-- Name: art art_sid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.art
    ADD CONSTRAINT art_sid_fkey FOREIGN KEY (sid) REFERENCES public.songs(sid);


--
-- PostgreSQL database dump complete
--

