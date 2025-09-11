CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('particulier','association','entreprise')),
    role VARCHAR(20) NOT NULL DEFAULT 'member' CHECK (role IN ('member','admin'))
);

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL DEFAULT 0.0,
    description VARCHAR(10000) NOT NULL,
    image_url TEXT[] NOT NULL,
    available BOOLEAN NOT NULL DEFAULT true,
    stock INT NOT NULL DEFAULT 0
);

CREATE TABLE location (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    gps_point POINT NOT NULL
);

CREATE TABLE product_location (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL REFERENCES product(id) ON DELETE CASCADE,
    location_id INT NOT NULL REFERENCES location(id) ON DELETE CASCADE
);

CREATE TABLE "order" (
    id SERIAL PRIMARY KEY,
    date TIMESTAMPTZ NOT NULL DEFAULT now(),
    status VARCHAR(20) NOT NULL CHECK (status IN ('pending','paid','cancelled')),
    total DECIMAL(10,2) NOT NULL DEFAULT 0.0,
    user_id INT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE
);

CREATE TABLE order_item (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES "order"(id) ON DELETE CASCADE,
    product_id INT NOT NULL REFERENCES product(id),
    quantity INT NOT NULL DEFAULT 1,
    unit_price DECIMAL(10,2) NOT NULL
);

CREATE TABLE log (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    level VARCHAR(20) NOT NULL CHECK (level IN ('info','warning','error')),
    message VARCHAR(10000) NOT NULL,
    context JSONB,
    user_id INT REFERENCES "user"(id) ON DELETE SET NULL
);
