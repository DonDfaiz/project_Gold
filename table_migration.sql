-- public.books definition

-- Drop table

-- DROP TABLE public.books;

CREATE TABLE public.books (
	id serial4 NOT NULL,
	title varchar NOT NULL,
	author varchar NULL,
	publisher varchar NULL,
	CONSTRAINT books_pk PRIMARY KEY (id)
);