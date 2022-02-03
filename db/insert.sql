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
(1, '12575781', '63143111', 'Ashgabat, Garashsyzlyk str. 30/1', 'order@sharafyyabi.com');

INSERT INTO roles(role_name) VALUES ('admin'), ('user');