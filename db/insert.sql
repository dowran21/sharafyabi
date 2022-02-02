INSERT INTO languages (language, language_code)VALUES 
('Turkmen', 'tm'), 
('Русский', 'ru'), 
('English', 'en');

INSERT INTO discount_types (id, name) VALUES
(1, 'Продукт'),
(2, 'Категория'),
(3, 'Заказ'),
(4, 'Купон');

INSERT INTO shop_data(id, phone1, phone2, address, email) VALUES 
(1, '61123141', '61123141', 'Something like this i want to change', 'order@sharafyyabi.com');

INSERT INTO roles(role_name) VALUES ('admin'), ('user');

SELECT (
            SELECT COUNT(pc.id) FROM product_comments pc WHERE pc.product_id = 2 AND pc.main_comment_id IS NULL
        ) AS count, (
            SELECT json_agg(com) FROM (
                SELECT pc.comment, u.full_name, to_char(pc.created_at, 'DD.MM.YYYY HH24:MI') AS created_at,
                    (
                    SELECT json_agg(sd) FROM (
                        SELECT pcc.comment, u.full_name, to_char(pcc.created_at, 'DD.MM.YYYY HH24:MI') AS created_at
                        
                        FROM product_comments pcc
                        INNER JOIN users u
                            ON u.id = pcc.user_id 
                        WHERE pcc.product_id = 2 AND pcc.main_comment_id = pc.id

                        ) sd) AS sub_comments
                FROM product_comments pc
                INNER JOIN users u
                    ON u.id = pc.user_id 
                WHERE pc.product_id = 2 AND pc.main_comment_id IS NULL
        )com) AS comments