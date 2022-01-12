DROP DATABASE IF EXISTS sharafyabi;

CREATE DATABASE sharafyabi;

\c sharafyabi;
CREATE EXTENSION IF NOT EXISTS "btree_gist";

CREATE TABLE languages(
    id SMALLSERIAL PRIMARY KEY NOT NULL,
    "language" CHARACTER VARYING(30) NOT NULL,
    language_code VARCHAR (5) NOT NULL,
    UNIQUE("language")
);

CREATE TABLE roles(
    id SMALLSERIAL PRIMARY KEY NOT NULL,
    role_name VARCHAR (100)
);

CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    role_id SMALLINT NOT NULL,
    full_name VARCHAR (150) NOT NULL,
    email VARCHAR (100),
    "password" VARCHAR (250) NOT NULL,
    phone VARCHAR(8) NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
    UNIQUE(phone),

    CONSTRAINT role_id_fk FOREIGN KEY (role_id) REFERENCES roles(id) ON UPDATE CASCADE 
);

CREATE TABLE categories(
    id SMALLSERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR (150) NOT NULL,
    destination VARCHAR(200)
    ---, main_category_id SMALLINT, ----nawerno nado budet ubrat yego tak kak on ne nuzhen

    -- CONSTRAINT main_category_id_fk FOREIGN KEY (main_category_id) REFERENCES categories(id) ON UPDATE CASCADE
);

CREATE TABLE category_translations(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    language_id SMALLINT NOT NULL,
    category_id SMALLINT NOT NULL,
    "name" VARCHAR(150) NOT NULL,

    CONSTRAINT language_id_fk FOREIGN KEY (language_id) REFERENCES languages(id) ON UPDATE CASCADE,
    CONSTRAINT category_id_fk FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE CASCADE
);

CREATE TABLE producers(
    id SMALLSERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR (150) NOT NULL,
    destination VARCHAR(150)
);

CREATE TABLE products(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    category_id SMALLINT ,
    producer_id SMALLINT ,
    stock BIGINT NOT NULL,
    price NUMERIC(8,2) NOT NULL,
    "name" VARCHAR (150) NOT NULL,
    destination VARCHAR (350),
    articul VARCHAR(30),
    UNIQUE("name", "articul"),
   
    CONSTRAINT producer_id_fk FOREIGN KEY (producer_id) REFERENCES producers(id) ON UPDATE CASCADE,
    CONSTRAINT category_id_fk FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE CASCADE
);

CREATE TABLE product_translations(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    product_id BIGINT NOT NULL,
    language_id SMALLINT NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "description" TEXT NOT NULL,
    UNIQUE(product_id, language_id),

    CONSTRAINT product_id_fk FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE,
    CONSTRAINT language_id_fk FOREIGN KEY (language_id) REFERENCES languages(id) ON UPDATE CASCADE
);

CREATE TABLE order_products(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    product_id BIGINT NOT NULL,
    order_id BIGINT NOT NULL,
    quantity SMALLINT NOT NULL,
    price NUMERIC(8, 2) NOT NULL,

    CONSTRAINT product_id_fk FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE
);

CREATE TABLE main_page_images(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    destination VARCHAR(150) NOT NULL
);

CREATE TABLE news(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
    deleted BOOLEAN DEFAULT FALSE,
    destination VARCHAR(150),
    title VARCHAR(150)

);

CREATE TABLE news_descriptions(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    news_id INTEGER NOT NULL,
    language_id SMALLINT NOT NULL,
    title VARCHAR(150),
    article TEXT NOT NULL,

    CONSTRAINT news_id_fk FOREIGN KEY (news_id) REFERENCES news(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT language_id_fk FOREIGN KEY (language_id) REFERENCES languages(id) ON UPDATE CASCADE ON DELETE CASCADE
);


CREATE TABLE discount_types(
    id SMALLSERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR(150) NOT NULL
);

CREATE TABLE discounts(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    discount_type_id SMALLINT NOT NULL,
    min_value INTEGER,
    discount_value INTEGER NOT NULL,
    coupon VARCHAR (150),
    product_id BIGINT,
    created_at TIMESTAMP WITHOUT TIME ZONE  NOT NULL DEFAULT now(),
    validity tsrange NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    EXCLUDE USING gist(validity WITH &&, product_id WITH =) WHERE (discount_type_id = 1 AND is_active = TRUE),
    EXCLUDE USING gist(validity WITH &&) WHERE (discount_type_id = 3 AND is_active = TRUE),
    EXCLUDE USING gist(validity WITH &&) WHERE (discount_type_id = 4 AND is_active = TRUE),

    CONSTRAINT discount_type_id_fk FOREIGN KEY (discount_type_id) REFERENCES discount_types(id) ON UPDATE CASCADE,
    CONSTRAINT product_id_fk FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY NOT NULL,
    phone VARCHAR (8) NOT NULL,
    "address" VARCHAR(150) NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    user_id BIGINT,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
    accepted BOOLEAN DEFAULT true,
    discount_id INTEGER,
    coupon VARCHAR(150),
    total_price NUMERIC (10, 2) NOT NULL,

    CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE
);

CREATE TABLE order_items(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    product_id BIGINT NOT NULL,
    quantity SMALLINT NOT NULL,
    price NUMERIC(8, 2) NOT NULL,
    order_id BIGINT NOT NULL,

    CONSTRAINT product_id_fk FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE,
    CONSTRAINT order_id_fk FOREIGN KEY (order_id) REFERENCES orders(id) ON UPDATE CASCADE
);

CREATE TABLE banner(
    id SMALLSERIAL PRIMARY KEY NOT NULL,
    destination VARCHAR(150) NOT NULL
);