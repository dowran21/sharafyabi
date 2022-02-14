                    VALUES ((SELECT id FROM inserted230), 1, 'SEA COLOR saç boýagy kod № 8.73 Karamel'),
                     ((SELECT id FROM inserted230), 2, 'SEA COLOR краска для волос код № 8.73 Карамель'),
                     ((SELECT id FROM inserted230), 3, 'SEA COLOR краска для волос код № 8.73 Caramel')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted231 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 9.0 Натуральный блондин', '8698753382058--', 35, 194)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans231 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted231), 1, 'SEA COLOR saç boýagy kod № 9.0 Tebigy saryýagyz'),
                     ((SELECT id FROM inserted231), 2, 'SEA COLOR краска для волос код № 9.0 Натуральный блондин'),
                     ((SELECT id FROM inserted231), 3, 'SEA COLOR краска для волос код № 9.0 Natural blonde')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted232 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 9.00 Интенсивный желтый', '8698753382720-', 35, 1023)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans232 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted232), 1, 'SEA COLOR saç boýagy kod № 9.00 Intensiw sary'),
                     ((SELECT id FROM inserted232), 2, 'SEA COLOR краска для волос код № 9.00 Интенсивный желтый'),
                     ((SELECT id FROM inserted232), 3, 'SEA COLOR краска для волос код № 9.00 Intense yellow')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted233 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 9.1 Алмазный Блонд', '8698753382737', 35, 1817)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans233 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted233), 1, 'SEA COLOR saç boýagy kod № 9.1 Göwher saryýagyz'),
                     ((SELECT id FROM inserted233), 2, 'SEA COLOR краска для волос код № 9.1 Алмазный Блонд'),
                     ((SELECT id FROM inserted233), 3, 'SEA COLOR краска для волос код № 9.1 Diamond Blonde')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted235 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE Oksidan 1литр 10 VOL 3%', '869875338151', 50, 1)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans235 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted235), 1, 'ARCADE Okislendiriji 1 Litr 10 VOL 3%'),
                     ((SELECT id FROM inserted235), 2, 'ARCADE Oksidan 1литр 10 VOL 3%'),
                     ((SELECT id FROM inserted235), 3, 'ARCADE Oxidant 1 Liter 10 VOL 3%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted236 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE Oksidan 1литр 20 VOL 6%', '-86987533815', 50, 874)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans236 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted236), 1, 'ARCADE Okislendiriji 1 Litr 20 VOL 6%'),
                     ((SELECT id FROM inserted236), 2, 'ARCADE Oksidan 1литр 20 VOL 6%'),
                     ((SELECT id FROM inserted236), 3, 'ARCADE Oxidant 1 Liter 20 VOL 6%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted237 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE Oksidan 1литр 30 VOL 9 %', '869875338152', 50, 422)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans237 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted237), 1, 'ARCADE Okislendiriji 1 Litr 30 VOL 9%'),
                     ((SELECT id FROM inserted237), 2, 'ARCADE Oksidan 1литр 30 VOL 9 %'),
                     ((SELECT id FROM inserted237), 3, 'ARCADE Oxidant 1 Liter 30 VOL 9%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted238 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE Oksidan 1литр 40 VOL 12 %', '869875338153', 50, 426)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans238 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted238), 1, 'ARCADE Okislendiriji 1 Litr 40 VOL 12%'),
                     ((SELECT id FROM inserted238), 2, 'ARCADE Oksidan 1литр 40 VOL 12 %'),
                     ((SELECT id FROM inserted238), 3, 'ARCADE Oxidant 1 Liter 40 VOL 12%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted239 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE OKSIDAN 5 ЛИТР 10 VOL 3%', 'null', 190, 129)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans239 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted239), 1, 'ARCADE Okislendiriji 5 Litr 10 VOL 3%'),
                     ((SELECT id FROM inserted239), 2, 'ARCADE OKSIDAN 5 ЛИТР 10 VOL 3%'),
                     ((SELECT id FROM inserted239), 3, 'ARCADE Oxidant 5 Liter 10 VOL 3%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted240 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE OKSIDAN 5 ЛИТР 20 VOL 6%', 'null', 190, 521)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans240 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted240), 1, 'ARCADE Okislendiriji 5 Litr 20 VOL 6%'),
                     ((SELECT id FROM inserted240), 2, 'ARCADE OKSIDAN 5 ЛИТР 20 VOL 6%'),
                     ((SELECT id FROM inserted240), 3, 'ARCADE Oxidant 5 Liter 20 VOL 6%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted241 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE OKSIDAN 5 ЛИТР 30 VOL 9 %', 'null', 190, 435)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans241 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted241), 1, 'ARCADE Okislendiriji 5 Litr 30 VOL 9%'),
                     ((SELECT id FROM inserted241), 2, 'ARCADE OKSIDAN 5 ЛИТР 30 VOL 9 %'),
                     ((SELECT id FROM inserted241), 3, 'ARCADE Oxidant 5 Liter 30 VOL 9%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted242 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE OKSIDAN 5 ЛИТР 40 VOL 12 %', 'null', 190, 398)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans242 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted242), 1, 'ARCADE Okislendiriji 5 Litr 40 VOL 12%'),
                     ((SELECT id FROM inserted242), 2, 'ARCADE OKSIDAN 5 ЛИТР 40 VOL 12 %'),
                     ((SELECT id FROM inserted242), 3, 'ARCADE Oxidant 5 Liter 40 VOL 12%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted243 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Lilafix Oksidan 1литр 10 VOL 3%', '869875338151-', 55, 322)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans243 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted243), 1, 'LILAFIX Okislendiriji 1 Litr 10 VOL 3%'),
                     ((SELECT id FROM inserted243), 2, 'Lilafix Oksidan 1литр 10 VOL 3%'),
                     ((SELECT id FROM inserted243), 3, 'LILAFIX Oxidant 1 Liter 10 VOL 3%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted244 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Lilafix Oksidan 1литр 20 VOL 6%', '86987533815-', 55, 578)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans244 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted244), 1, 'LILAFIX Okislendiriji 1 Litr 20 VOL 6%'),
                     ((SELECT id FROM inserted244), 2, 'Lilafix Oksidan 1литр 20 VOL 6%'),
                     ((SELECT id FROM inserted244), 3, 'LILAFIX Oxidant 1 Liter 20 VOL 6%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted245 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Lilafix Oksidan 1литр 30 VOL 9 %', '869875338152-', 55, 637)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans245 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted245), 1, 'LILAFIX Okislendiriji 1 Litr 30 VOL 9%'),
                     ((SELECT id FROM inserted245), 2, 'Lilafix Oksidan 1литр 30 VOL 9 %'),
                     ((SELECT id FROM inserted245), 3, 'LILAFIX Oxidant 1 Liter 30 VOL 9%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted246 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Lilafix Oksidan 1литр 40 VOL 12 %', '869875338153-', 55, 579)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans246 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted246), 1, 'LILAFIX Okislendiriji 1 Litr 40 VOL 12%'),
                     ((SELECT id FROM inserted246), 2, 'Lilafix Oksidan 1литр 40 VOL 12 %'),
                     ((SELECT id FROM inserted246), 3, 'LILAFIX Oxidant 1 Liter 40 VOL 12%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted247 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('LILAFIX OKSIDAN 5 ЛИТР 10 VOL 3%', '01', 210, 62)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans247 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted247), 1, 'LILAFIX Okislendiriji 5 Litr 10 VOL 3%'),
                     ((SELECT id FROM inserted247), 2, 'LILAFIX OKSIDAN 5 ЛИТР 10 VOL 3%'),
                     ((SELECT id FROM inserted247), 3, 'LILAFIX Oxidant 5 Liter 10 VOL 3%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted248 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('LILAFIX OKSIDAN 5 ЛИТР 20 VOL 6%', '02', 210, 156)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans248 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted248), 1, 'LILAFIX Okislendiriji 5 Litr 20 VOL 6%'),
                     ((SELECT id FROM inserted248), 2, 'LILAFIX OKSIDAN 5 ЛИТР 20 VOL 6%'),
                     ((SELECT id FROM inserted248), 3, 'LILAFIX Oxidant 5 Liter 20 VOL 6%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted249 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('LILAFIX OKSIDAN 5 ЛИТР 30 VOL 9 %', '03', 210, 108)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans249 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted249), 1, 'LILAFIX Okislendiriji 5 Litr 30 VOL 9%'),
                     ((SELECT id FROM inserted249), 2, 'LILAFIX OKSIDAN 5 ЛИТР 30 VOL 9 %'),
                     ((SELECT id FROM inserted249), 3, 'LILAFIX Oxidant 5 Liter 30 VOL 9%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted250 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('LILAFIX OKSIDAN 5 ЛИТР 40 VOL 12 %', '04', 210, 72)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans250 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted250), 1, 'LILAFIX Okislendiriji 5 Litr 40 VOL 12%'),
                     ((SELECT id FROM inserted250), 2, 'LILAFIX OKSIDAN 5 ЛИТР 40 VOL 12 %'),
                     ((SELECT id FROM inserted250), 3, 'LILAFIX Oxidant 5 Liter 40 VOL 12%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted251 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('MAXX OKSIDAN 1литр 10 VOL 3%', '000001', 58, 31)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans251 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted251), 1, 'MAXX Okislendiriji 1 Litr 10 VOL 3%'),
                     ((SELECT id FROM inserted251), 2, 'MAXX OKSIDAN 1литр 10 VOL 3%'),
                     ((SELECT id FROM inserted251), 3, 'MAXX Oxidant 1 Liter 10 VOL 3%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted252 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('MAXX OKSIDAN 1литр 20 VOL 6%', '000002', 58, 65)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans252 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted252), 1, 'MAXX Okislendiriji 1 Litr 20 VOL 6%'),
                     ((SELECT id FROM inserted252), 2, 'MAXX OKSIDAN 1литр 20 VOL 6%'),
                     ((SELECT id FROM inserted252), 3, 'MAXX Oxidant 1 Liter 20 VOL 6%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted253 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('MAXX OKSIDAN 1литр 30 VOL 9%', '000003', 58, 67)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans253 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted253), 1, 'MAXX Okislendiriji 1 Litr 30 VOL 9%'),
                     ((SELECT id FROM inserted253), 2, 'MAXX OKSIDAN 1литр 30 VOL 9%'),
                     ((SELECT id FROM inserted253), 3, 'MAXX Oxidant 1 Liter 30 VOL 9%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted254 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('MAXX OKSIDAN 1литр 40 VOL12%', '000004', 58, 78)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans254 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted254), 1, 'MAXX Okislendiriji 1 Litr 40 VOL 12%'),
                     ((SELECT id FROM inserted254), 2, 'MAXX OKSIDAN 1литр 40 VOL12%'),
                     ((SELECT id FROM inserted254), 3, 'MAXX Oxidant 1 Liter 40 VOL 12%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted255 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Окислитель для окрашивания волос LILAFIX 60ml 20 VOL 6%', '8698756682971', 7, 1240)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans255 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted255), 1, 'Saç boýagy üçin okislendiriji LILAFIX 60 ml 20 VOL 6%'),
                     ((SELECT id FROM inserted255), 2, 'Окислитель для окрашивания волос LILAFIX 60ml 20 VOL 6%'),
                     ((SELECT id FROM inserted255), 3, 'Hair color oxidant LILAFIX 60 ml 20 VOL 6%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted256 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Окислитель для окрашивания волос LILAFIX 60ml 30 VOL 9%', '8698756682971-1', 7, 1363)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans256 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted256), 1, 'Saç boýagy üçin okislendiriji LILAFIX 60 ml 30 VOL 9%'),
                     ((SELECT id FROM inserted256), 2, 'Окислитель для окрашивания волос LILAFIX 60ml 30 VOL 9%'),
                     ((SELECT id FROM inserted256), 3, 'Hair color oxidant LILAFIX 60 ml 30 VOL 9%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted257 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Окислитель для окрашивания волос SEA COLOR  в пакетиках 60ml 30 VOL 9%', 'null', 7, 80)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans257 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted257), 1, 'Saç boýagy üçin okislendiriji SEA COLOR torbajyklarda 60 ml 30 VOL 9%'),
                     ((SELECT id FROM inserted257), 2, 'Окислитель для окрашивания волос SEA COLOR  в пакетиках 60ml 30 VOL 9%'),
                     ((SELECT id FROM inserted257), 3, 'Hair color oxidant SEA COLOR packages 60 ml 30 VOL 9%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted258 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Осветлитель для волос  ARCADE 1000gr ', '8697454050198', 195, 284)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans258 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted258), 1, 'Saç durlandyjy ARCADE 1000 gr'),
                     ((SELECT id FROM inserted258), 2, 'Осветлитель для волос  ARCADE 1000gr '),
                     ((SELECT id FROM inserted258), 3, 'Hair lightener ARCADE 1000 gr')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted259 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Осветлитель для волос  LILAFIX 1000gr ', '00000083', 210, 174)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans259 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted259), 1, 'Saç durlandyjy LILAFIX 1000 gr'),
                     ((SELECT id FROM inserted259), 2, 'Осветлитель для волос  LILAFIX 1000gr '),
                     ((SELECT id FROM inserted259), 3, 'Hair lightener LILAFIX 1000 gr')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ) SELECT 1
Hey you have added
dowran@dowran-Aspire-E5-575G:~/Desktop/sharafyabi/backend/db$ node insert_products

       WITH  
    inserted199 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 0.01 Дымчато-пепельный', '8698753387015-', 35, 2083)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans199 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted199), 1, 'SEA COLOR saç boýagy kod № 0.01 Tüsse-kül'),
                     ((SELECT id FROM inserted199), 2, 'SEA COLOR краска для волос код № 0.01 Дымчато-пепельный'),
                     ((SELECT id FROM inserted199), 3, 'SEA COLOR краска для волос код № 0.01 Smoky ash')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted200 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 0.02 Серебристо-пепельный', '8698753387046-', 35, 1346)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans200 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted200), 1, 'SEA COLOR saç boýagy kod № 0.02 Kümüş kül'),
                     ((SELECT id FROM inserted200), 2, 'SEA COLOR краска для волос код № 0.02 Серебристо-пепельный'),
                     ((SELECT id FROM inserted200), 3, 'SEA COLOR краска для волос код № 0.02 Silver Ash')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted201 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 0.1 Платиновый блондин', '8698753381983-', 35, 208)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans201 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted201), 1, 'SEA COLOR saç boýagy kod № 0.1 Platina saryýagyz'),
                     ((SELECT id FROM inserted201), 2, 'SEA COLOR краска для волос код № 0.1 Платиновый блондин'),
                     ((SELECT id FROM inserted201), 3, 'SEA COLOR краска для волос код № 0.1 Platinum blonde')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted202 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 0.2 Пепельный Блондин ', '8698753382706-', 35, 241)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans202 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted202), 1, 'SEA COLOR saç boýagy kod № 0.2 Kül-saryýagyz'),
                     ((SELECT id FROM inserted202), 2, 'SEA COLOR краска для волос код № 0.2 Пепельный Блондин '),
                     ((SELECT id FROM inserted202), 3, 'SEA COLOR краска для волос код № 0.2 Ash Blonde')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted203 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 1.0 Черный ', '8698753381808-', 35, 3137)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans203 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted203), 1, 'SEA COLOR saç boýagy kod № 1.0 Gar'),
                     ((SELECT id FROM inserted203), 2, 'SEA COLOR краска для волос код № 1.0 Черный '),
                     ((SELECT id FROM inserted203), 3, 'SEA COLOR краска для волос код № 1.0 Black')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted204 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 1.1 Иссиня-черный', '8698753382096-', 35, 3133)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans204 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted204), 1, 'SEA COLOR saç boýagy kod № 1.1 Gök-gara'),
                     ((SELECT id FROM inserted204), 2, 'SEA COLOR краска для волос код № 1.1 Иссиня-черный'),
                     ((SELECT id FROM inserted204), 3, 'SEA COLOR краска для волос код № 1.1 Blue-black')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted205 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 10.0 Светлый блондин', '8698753382065-', 35, 291)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans205 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted205), 1, 'SEA COLOR saç boýagy kod № 10.0 Açyk saryýagyz'),
                     ((SELECT id FROM inserted205), 2, 'SEA COLOR краска для волос код № 10.0 Светлый блондин'),
                     ((SELECT id FROM inserted205), 3, 'SEA COLOR краска для волос код № 10.0 Light blonde')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted206 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 3.0 Тёмный каштан', '8698753381815-', 35, 1949)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans206 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted206), 1, 'SEA COLOR saç boýagy kod № 3.0 Gara goňras'),
                     ((SELECT id FROM inserted206), 2, 'SEA COLOR краска для волос код № 3.0 Тёмный каштан'),
                     ((SELECT id FROM inserted206), 3, 'SEA COLOR краска для волос код № 3.0 Dark chestnut')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted207 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 3.66 Баклажан', '8698753381907-', 35, 505)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans207 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted207), 1, 'SEA COLOR saç boýagy kod № 3.66 Badamjan'),
                     ((SELECT id FROM inserted207), 2, 'SEA COLOR краска для волос код № 3.66 Баклажан'),
                     ((SELECT id FROM inserted207), 3, 'SEA COLOR краска для волос код № 3.66 Eggplant')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted208 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 4.0 Каштан', '8698753381822-', 35, 1301)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans208 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted208), 1, 'SEA COLOR saç boýagy kod № 4.0 Goňras'),
                     ((SELECT id FROM inserted208), 2, 'SEA COLOR краска для волос код № 4.0 Каштан'),
                     ((SELECT id FROM inserted208), 3, 'SEA COLOR краска для волос код № 4.0 Chestnut')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted209 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 4.6 Красный Каштан', '8698753381921-', 35, 255)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans209 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted209), 1, 'SEA COLOR saç boýagy kod № 4.6 Gyzyl goňras'),
                     ((SELECT id FROM inserted209), 2, 'SEA COLOR краска для волос код № 4.6 Красный Каштан'),
                     ((SELECT id FROM inserted209), 3, 'SEA COLOR краска для волос код № 4.6 Red Chestnut')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted210 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 4.65 Красное вино', '8698753381952-', 35, 17)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans210 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted210), 1, 'SEA COLOR saç boýagy kod № 4.65 Gyzyl wino'),
                     ((SELECT id FROM inserted210), 2, 'SEA COLOR краска для волос код № 4.65 Красное вино'),
                     ((SELECT id FROM inserted210), 3, 'SEA COLOR краска для волос код № 4.65 Red wine')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted211 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 5.0 Светлый каштан', '8698753381839-', 35, 1599)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans211 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted211), 1, 'SEA COLOR saç boýagy kod № 5.0 Açyk goňras'),
                     ((SELECT id FROM inserted211), 2, 'SEA COLOR краска для волос код № 5.0 Светлый каштан'),
                     ((SELECT id FROM inserted211), 3, 'SEA COLOR краска для волос код № 5.0 Light chestnut')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted212 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 5.65 Клубнично-красный', '8698753381914-', 35, 94)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans212 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted212), 1, 'SEA COLOR saç boýagy kod № 5.65 Ýertudana-gyzyl'),
                     ((SELECT id FROM inserted212), 2, 'SEA COLOR краска для волос код № 5.65 Клубнично-красный'),
                     ((SELECT id FROM inserted212), 3, 'SEA COLOR краска для волос код № 5.65 Strawberry red')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted213 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 5.77 Горячий шоколад', '8698753381846-', 35, 1882)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans213 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted213), 1, 'SEA COLOR saç boýagy kod № 5.77 Gyzgyn şokolad'),
                     ((SELECT id FROM inserted213), 2, 'SEA COLOR краска для волос код № 5.77 Горячий шоколад'),
                     ((SELECT id FROM inserted213), 3, 'SEA COLOR краска для волос код № 5.77 Hot chocolate')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted214 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 55.46 Рубиново - красный', '8698753381938-', 35, 195)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans214 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted214), 1, 'SEA COLOR saç boýagy kod № 55.46 Lagyl-gyzyl'),
                     ((SELECT id FROM inserted214), 2, 'SEA COLOR краска для волос код № 55.46 Рубиново - красный'),
                     ((SELECT id FROM inserted214), 3, 'SEA COLOR краска для волос код № 55.46 Ruby red')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted215 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 6.0 Тёмно-русый', '8698753382027-', 35, 3360)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans215 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted215), 1, 'SEA COLOR saç boýagy kod № 6.0 Goýy-sary'),
                     ((SELECT id FROM inserted215), 2, 'SEA COLOR краска для волос код № 6.0 Тёмно-русый'),
                     ((SELECT id FROM inserted215), 3, 'SEA COLOR краска для волос код № 6.0 Dark blond')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted216 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 6.1 Пепельный тёмно-русый', '8698753387183-', 35, 3050)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans216 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted216), 1, 'SEA COLOR saç boýagy kod № 6.1 Kül goýy-sary'),
                     ((SELECT id FROM inserted216), 2, 'SEA COLOR краска для волос код № 6.1 Пепельный тёмно-русый'),
                     ((SELECT id FROM inserted216), 3, 'SEA COLOR краска для волос код № 6.1 Ash dark blond')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted217 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 6.11 Интенсивно пепельный темно-русый', '8698753387039-', 35, 2191)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans217 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted217), 1, 'SEA COLOR saç boýagy kod № 6.11 Intensiw kül goýy-sary'),
                     ((SELECT id FROM inserted217), 2, 'SEA COLOR краска для волос код № 6.11 Интенсивно пепельный темно-русый'),
                     ((SELECT id FROM inserted217), 3, 'SEA COLOR краска для волос код № 6.11 Intense ash dark blond')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted218 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 6.7 Шоколадный кофе', '8698753381860-', 35, 1238)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans218 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted218), 1, 'SEA COLOR saç boýagy kod № 6.7 Şokoladly kofe'),
                     ((SELECT id FROM inserted218), 2, 'SEA COLOR краска для волос код № 6.7 Шоколадный кофе'),
                     ((SELECT id FROM inserted218), 3, 'SEA COLOR краска для волос код № 6.7 Chocolate coffee')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted219 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 66.46', '8698753381945-', 35, 175)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans219 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted219), 1, 'SEA COLOR saç boýagy kod № 66.46'),
                     ((SELECT id FROM inserted219), 2, 'SEA COLOR краска для волос код № 66.46'),
                     ((SELECT id FROM inserted219), 3, 'SEA COLOR краска для волос код № 66.46')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted220 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 7.0 Средний блондин натуральный', '8698753382034-', 35, 1812)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans220 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted220), 1, 'SEA COLOR saç boýagy kod № 7.0 Orta saryýagyz tebigy'),
                     ((SELECT id FROM inserted220), 2, 'SEA COLOR краска для волос код № 7.0 Средний блондин натуральный'),
                     ((SELECT id FROM inserted220), 3, 'SEA COLOR краска для волос код № 7.0 Medium blonde natural')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted221 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 7.1 Пепельно-русый', '8698753381990-', 35, 6472)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans221 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted221), 1, 'SEA COLOR saç boýagy kod № 7.1 Kül-sary'),
                     ((SELECT id FROM inserted221), 2, 'SEA COLOR краска для волос код № 7.1 Пепельно-русый'),
                     ((SELECT id FROM inserted221), 3, 'SEA COLOR краска для волос код № 7.1 Ash blonde')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted222 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 7.11 Интенсивно пепельный русый', '8698753387022-', 35, 3300)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans222 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted222), 1, 'SEA COLOR saç boýagy kod № 7.11 Intensiw kül sary'),
                     ((SELECT id FROM inserted222), 2, 'SEA COLOR краска для волос код № 7.11 Интенсивно пепельный русый'),
                     ((SELECT id FROM inserted222), 3, 'SEA COLOR краска для волос код № 7.11 Intense ash blonde')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted223 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 7.3 Фундук', '8698753382003-', 35, 1399)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans223 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted223), 1, 'SEA COLOR saç boýagy kod № 7.3 Pisse'),
                     ((SELECT id FROM inserted223), 2, 'SEA COLOR краска для волос код № 7.3 Фундук'),
                     ((SELECT id FROM inserted223), 3, 'SEA COLOR краска для волос код № 7.3 Hazelnut')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted224 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 7.7 Темный карамель', '8698753381877-', 35, 1102)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans224 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted224), 1, 'SEA COLOR saç boýagy kod № 7.7 Goýy karamel'),
                     ((SELECT id FROM inserted224), 2, 'SEA COLOR краска для волос код № 7.7 Темный карамель'),
                     ((SELECT id FROM inserted224), 3, 'SEA COLOR краска для волос код № 7.7 Dark caramel')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted225 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 8.0 Светло-русый', '8698753382041-', 35, 2168)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans225 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted225), 1, 'SEA COLOR saç boýagy kod № 8.0 Açyk-sary'),
                     ((SELECT id FROM inserted225), 2, 'SEA COLOR краска для волос код № 8.0 Светло-русый'),
                     ((SELECT id FROM inserted225), 3, 'SEA COLOR краска для волос код № 8.0 Light blond')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted226 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 8.00 Интенсивный светло-каштановый', '8698753382713-', 35, 1695)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans226 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted226), 1, 'SEA COLOR saç boýagy kod № 8.00 Intensiw açyk-goňur'),
                     ((SELECT id FROM inserted226), 2, 'SEA COLOR краска для волос код № 8.00 Интенсивный светло-каштановый'),
                     ((SELECT id FROM inserted226), 3, 'SEA COLOR краска для волос код № 8.00 Intense light chestnut')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted227 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 8.1 Пепельный светло-русый', '8698753387190-', 35, 2585)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans227 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted227), 1, 'SEA COLOR saç boýagy kod № 8.1 Kül açyk-sary'),
                     ((SELECT id FROM inserted227), 2, 'SEA COLOR краска для волос код № 8.1 Пепельный светло-русый'),
                     ((SELECT id FROM inserted227), 3, 'SEA COLOR краска для волос код № 8.1 Ash light blond')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted228 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 8.11 Интенсивно пепельный светло-русый', '8698753387008-', 35, 2270)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans228 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted228), 1, 'SEA COLOR saç boýagy kod № 8.11 Intensiw kül açyk-sary'),
                     ((SELECT id FROM inserted228), 2, 'SEA COLOR краска для волос код № 8.11 Интенсивно пепельный светло-русый'),
                     ((SELECT id FROM inserted228), 3, 'SEA COLOR краска для волос код № 8.11 Intense ash light blond')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted229 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 8.3 Медовая пенка', '8698753382010-', 35, 1525)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans229 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted229), 1, 'SEA COLOR saç boýagy kod № 8.3 Bal köpük'),
                     ((SELECT id FROM inserted229), 2, 'SEA COLOR краска для волос код № 8.3 Медовая пенка'),
                     ((SELECT id FROM inserted229), 3, 'SEA COLOR краска для волос код № 8.3 Honey foam')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted230 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 8.73 Карамель', '8698753381891-', 35, 833)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans230 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted230), 1, 'SEA COLOR saç boýagy kod № 8.73 Karamel'),
                     ((SELECT id FROM inserted230), 2, 'SEA COLOR краска для волос код № 8.73 Карамель'),
                     ((SELECT id FROM inserted230), 3, 'SEA COLOR краска для волос код № 8.73 Caramel')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted231 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 9.0 Натуральный блондин', '8698753382058--', 35, 194)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans231 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted231), 1, 'SEA COLOR saç boýagy kod № 9.0 Tebigy saryýagyz'),
                     ((SELECT id FROM inserted231), 2, 'SEA COLOR краска для волос код № 9.0 Натуральный блондин'),
                     ((SELECT id FROM inserted231), 3, 'SEA COLOR краска для волос код № 9.0 Natural blonde')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted232 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 9.00 Интенсивный желтый', '8698753382720-', 35, 1023)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans232 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted232), 1, 'SEA COLOR saç boýagy kod № 9.00 Intensiw sary'),
                     ((SELECT id FROM inserted232), 2, 'SEA COLOR краска для волос код № 9.00 Интенсивный желтый'),
                     ((SELECT id FROM inserted232), 3, 'SEA COLOR краска для волос код № 9.00 Intense yellow')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted233 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('SEA COLOR краска для волос код № 9.1 Алмазный Блонд', '8698753382737', 35, 1817)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans233 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted233), 1, 'SEA COLOR saç boýagy kod № 9.1 Göwher saryýagyz'),
                     ((SELECT id FROM inserted233), 2, 'SEA COLOR краска для волос код № 9.1 Алмазный Блонд'),
                     ((SELECT id FROM inserted233), 3, 'SEA COLOR краска для волос код № 9.1 Diamond Blonde')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted235 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE Oksidan 1литр 10 VOL 3%', '869875338151', 50, 1)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans235 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted235), 1, 'ARCADE Okislendiriji 1 Litr 10 VOL 3%'),
                     ((SELECT id FROM inserted235), 2, 'ARCADE Oksidan 1литр 10 VOL 3%'),
                     ((SELECT id FROM inserted235), 3, 'ARCADE Oxidant 1 Liter 10 VOL 3%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted236 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE Oksidan 1литр 20 VOL 6%', '-86987533815', 50, 874)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans236 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted236), 1, 'ARCADE Okislendiriji 1 Litr 20 VOL 6%'),
                     ((SELECT id FROM inserted236), 2, 'ARCADE Oksidan 1литр 20 VOL 6%'),
                     ((SELECT id FROM inserted236), 3, 'ARCADE Oxidant 1 Liter 20 VOL 6%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted237 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE Oksidan 1литр 30 VOL 9 %', '869875338152', 50, 422)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans237 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted237), 1, 'ARCADE Okislendiriji 1 Litr 30 VOL 9%'),
                     ((SELECT id FROM inserted237), 2, 'ARCADE Oksidan 1литр 30 VOL 9 %'),
                     ((SELECT id FROM inserted237), 3, 'ARCADE Oxidant 1 Liter 30 VOL 9%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted238 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE Oksidan 1литр 40 VOL 12 %', '869875338153', 50, 426)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans238 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted238), 1, 'ARCADE Okislendiriji 1 Litr 40 VOL 12%'),
                     ((SELECT id FROM inserted238), 2, 'ARCADE Oksidan 1литр 40 VOL 12 %'),
                     ((SELECT id FROM inserted238), 3, 'ARCADE Oxidant 1 Liter 40 VOL 12%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted239 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE OKSIDAN 5 ЛИТР 10 VOL 3%', 'null', 190, 129)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans239 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted239), 1, 'ARCADE Okislendiriji 5 Litr 10 VOL 3%'),
                     ((SELECT id FROM inserted239), 2, 'ARCADE OKSIDAN 5 ЛИТР 10 VOL 3%'),
                     ((SELECT id FROM inserted239), 3, 'ARCADE Oxidant 5 Liter 10 VOL 3%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted240 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE OKSIDAN 5 ЛИТР 20 VOL 6%', 'null', 190, 521)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans240 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted240), 1, 'ARCADE Okislendiriji 5 Litr 20 VOL 6%'),
                     ((SELECT id FROM inserted240), 2, 'ARCADE OKSIDAN 5 ЛИТР 20 VOL 6%'),
                     ((SELECT id FROM inserted240), 3, 'ARCADE Oxidant 5 Liter 20 VOL 6%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted241 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE OKSIDAN 5 ЛИТР 30 VOL 9 %', 'null', 190, 435)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans241 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted241), 1, 'ARCADE Okislendiriji 5 Litr 30 VOL 9%'),
                     ((SELECT id FROM inserted241), 2, 'ARCADE OKSIDAN 5 ЛИТР 30 VOL 9 %'),
                     ((SELECT id FROM inserted241), 3, 'ARCADE Oxidant 5 Liter 30 VOL 9%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted242 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ARCADE OKSIDAN 5 ЛИТР 40 VOL 12 %', 'null', 190, 398)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans242 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted242), 1, 'ARCADE Okislendiriji 5 Litr 40 VOL 12%'),
                     ((SELECT id FROM inserted242), 2, 'ARCADE OKSIDAN 5 ЛИТР 40 VOL 12 %'),
                     ((SELECT id FROM inserted242), 3, 'ARCADE Oxidant 5 Liter 40 VOL 12%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted243 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Lilafix Oksidan 1литр 10 VOL 3%', '869875338151-', 55, 322)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans243 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted243), 1, 'LILAFIX Okislendiriji 1 Litr 10 VOL 3%'),
                     ((SELECT id FROM inserted243), 2, 'Lilafix Oksidan 1литр 10 VOL 3%'),
                     ((SELECT id FROM inserted243), 3, 'LILAFIX Oxidant 1 Liter 10 VOL 3%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted244 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Lilafix Oksidan 1литр 20 VOL 6%', '86987533815-', 55, 578)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans244 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted244), 1, 'LILAFIX Okislendiriji 1 Litr 20 VOL 6%'),
                     ((SELECT id FROM inserted244), 2, 'Lilafix Oksidan 1литр 20 VOL 6%'),
                     ((SELECT id FROM inserted244), 3, 'LILAFIX Oxidant 1 Liter 20 VOL 6%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted245 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Lilafix Oksidan 1литр 30 VOL 9 %', '869875338152-', 55, 637)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans245 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted245), 1, 'LILAFIX Okislendiriji 1 Litr 30 VOL 9%'),
                     ((SELECT id FROM inserted245), 2, 'Lilafix Oksidan 1литр 30 VOL 9 %'),
                     ((SELECT id FROM inserted245), 3, 'LILAFIX Oxidant 1 Liter 30 VOL 9%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted246 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Lilafix Oksidan 1литр 40 VOL 12 %', '869875338153-', 55, 579)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans246 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted246), 1, 'LILAFIX Okislendiriji 1 Litr 40 VOL 12%'),
                     ((SELECT id FROM inserted246), 2, 'Lilafix Oksidan 1литр 40 VOL 12 %'),
                     ((SELECT id FROM inserted246), 3, 'LILAFIX Oxidant 1 Liter 40 VOL 12%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted247 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('LILAFIX OKSIDAN 5 ЛИТР 10 VOL 3%', '01', 210, 62)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans247 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted247), 1, 'LILAFIX Okislendiriji 5 Litr 10 VOL 3%'),
                     ((SELECT id FROM inserted247), 2, 'LILAFIX OKSIDAN 5 ЛИТР 10 VOL 3%'),
                     ((SELECT id FROM inserted247), 3, 'LILAFIX Oxidant 5 Liter 10 VOL 3%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted248 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('LILAFIX OKSIDAN 5 ЛИТР 20 VOL 6%', '02', 210, 156)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans248 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted248), 1, 'LILAFIX Okislendiriji 5 Litr 20 VOL 6%'),
                     ((SELECT id FROM inserted248), 2, 'LILAFIX OKSIDAN 5 ЛИТР 20 VOL 6%'),
                     ((SELECT id FROM inserted248), 3, 'LILAFIX Oxidant 5 Liter 20 VOL 6%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted249 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('LILAFIX OKSIDAN 5 ЛИТР 30 VOL 9 %', '03', 210, 108)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans249 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted249), 1, 'LILAFIX Okislendiriji 5 Litr 30 VOL 9%'),
                     ((SELECT id FROM inserted249), 2, 'LILAFIX OKSIDAN 5 ЛИТР 30 VOL 9 %'),
                     ((SELECT id FROM inserted249), 3, 'LILAFIX Oxidant 5 Liter 30 VOL 9%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted250 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('LILAFIX OKSIDAN 5 ЛИТР 40 VOL 12 %', '04', 210, 72)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans250 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted250), 1, 'LILAFIX Okislendiriji 5 Litr 40 VOL 12%'),
                     ((SELECT id FROM inserted250), 2, 'LILAFIX OKSIDAN 5 ЛИТР 40 VOL 12 %'),
                     ((SELECT id FROM inserted250), 3, 'LILAFIX Oxidant 5 Liter 40 VOL 12%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted251 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('MAXX OKSIDAN 1литр 10 VOL 3%', '000001', 58, 31)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans251 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted251), 1, 'MAXX Okislendiriji 1 Litr 10 VOL 3%'),
                     ((SELECT id FROM inserted251), 2, 'MAXX OKSIDAN 1литр 10 VOL 3%'),
                     ((SELECT id FROM inserted251), 3, 'MAXX Oxidant 1 Liter 10 VOL 3%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted252 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('MAXX OKSIDAN 1литр 20 VOL 6%', '000002', 58, 65)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans252 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted252), 1, 'MAXX Okislendiriji 1 Litr 20 VOL 6%'),
                     ((SELECT id FROM inserted252), 2, 'MAXX OKSIDAN 1литр 20 VOL 6%'),
                     ((SELECT id FROM inserted252), 3, 'MAXX Oxidant 1 Liter 20 VOL 6%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted253 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('MAXX OKSIDAN 1литр 30 VOL 9%', '000003', 58, 67)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans253 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted253), 1, 'MAXX Okislendiriji 1 Litr 30 VOL 9%'),
                     ((SELECT id FROM inserted253), 2, 'MAXX OKSIDAN 1литр 30 VOL 9%'),
                     ((SELECT id FROM inserted253), 3, 'MAXX Oxidant 1 Liter 30 VOL 9%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted254 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('MAXX OKSIDAN 1литр 40 VOL12%', '000004', 58, 78)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans254 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted254), 1, 'MAXX Okislendiriji 1 Litr 40 VOL 12%'),
                     ((SELECT id FROM inserted254), 2, 'MAXX OKSIDAN 1литр 40 VOL12%'),
                     ((SELECT id FROM inserted254), 3, 'MAXX Oxidant 1 Liter 40 VOL 12%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted255 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Окислитель для окрашивания волос LILAFIX 60ml 20 VOL 6%', '8698756682971', 7, 1240)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans255 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted255), 1, 'Saç boýagy üçin okislendiriji LILAFIX 60 ml 20 VOL 6%'),
                     ((SELECT id FROM inserted255), 2, 'Окислитель для окрашивания волос LILAFIX 60ml 20 VOL 6%'),
                     ((SELECT id FROM inserted255), 3, 'Hair color oxidant LILAFIX 60 ml 20 VOL 6%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted256 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Окислитель для окрашивания волос LILAFIX 60ml 30 VOL 9%', '8698756682971-1', 7, 1363)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans256 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted256), 1, 'Saç boýagy üçin okislendiriji LILAFIX 60 ml 30 VOL 9%'),
                     ((SELECT id FROM inserted256), 2, 'Окислитель для окрашивания волос LILAFIX 60ml 30 VOL 9%'),
                     ((SELECT id FROM inserted256), 3, 'Hair color oxidant LILAFIX 60 ml 30 VOL 9%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted257 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Окислитель для окрашивания волос SEA COLOR  в пакетиках 60ml 30 VOL 9%', 'null', 7, 80)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans257 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted257), 1, 'Saç boýagy üçin okislendiriji SEA COLOR torbajyklarda 60 ml 30 VOL 9%'),
                     ((SELECT id FROM inserted257), 2, 'Окислитель для окрашивания волос SEA COLOR  в пакетиках 60ml 30 VOL 9%'),
                     ((SELECT id FROM inserted257), 3, 'Hair color oxidant SEA COLOR packages 60 ml 30 VOL 9%')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted258 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Осветлитель для волос  ARCADE 1000gr ', '8697454050198', 195, 284)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans258 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted258), 1, 'Saç durlandyjy ARCADE 1000 gr'),
                     ((SELECT id FROM inserted258), 2, 'Осветлитель для волос  ARCADE 1000gr '),
                     ((SELECT id FROM inserted258), 3, 'Hair lightener ARCADE 1000 gr')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted259 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Осветлитель для волос  LILAFIX 1000gr ', '00000083', 210, 174)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans259 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted259), 1, 'Saç durlandyjy LILAFIX 1000 gr'),
                     ((SELECT id FROM inserted259), 2, 'Осветлитель для волос  LILAFIX 1000gr '),
                     ((SELECT id FROM inserted259), 3, 'Hair lightener LILAFIX 1000 gr')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted260 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('ОСВЕТЛИТЕЛЬ для волос  LILAFIX 2000gr ', '00000084', 350, 697)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans260 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted260), 1, 'Saç durlandyjy LILAFIX 2000 gr'),
                     ((SELECT id FROM inserted260), 2, 'ОСВЕТЛИТЕЛЬ для волос  LILAFIX 2000gr '),
                     ((SELECT id FROM inserted260), 3, 'Hair lightener LILAFIX 2000 gr')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted261 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Осветлитель для волос  MAXX DELUXE 2000gr ', '-8698753383727', 370, 137)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans261 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted261), 1, 'Saç durlandyjy MAXX DELUXE 2000 gr'),
                     ((SELECT id FROM inserted261), 2, 'Осветлитель для волос  MAXX DELUXE 2000gr '),
                     ((SELECT id FROM inserted261), 3, 'Hair lightener MAXX DELUXE 2000 gr')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted262 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Осветлитель для волос  MAXX DELUXE GREY 1000gr ', '0000083', 210, 90)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans262 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted262), 1, 'Saç durlandyjy MAXX DELUXE GREY 1000 gr'),
                     ((SELECT id FROM inserted262), 2, 'Осветлитель для волос  MAXX DELUXE GREY 1000gr '),
                     ((SELECT id FROM inserted262), 3, 'Hair lightener MAXX DELUXE GREY 1000 gr')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted264 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Подгузники для взрослых SELPED STANDART LARGE SIZE 115 CM - 150 CM ', '8690879414774', 80, 61)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans264 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted264), 1, 'Ulylar üçin arlyk SELPED standart uly razmer 115 sm -150 sm'),
                     ((SELECT id FROM inserted264), 2, 'Подгузники для взрослых SELPED STANDART LARGE SIZE 115 CM - 150 CM '),
                     ((SELECT id FROM inserted264), 3, 'Adult diapers SELPED standart large size 115 cm -150 cm')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted265 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Подгузники для взрослых SELPED STANDART MEDIUM SIZE 80 CM - 115 CM ', '8690879414880', 80, 4792)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans265 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted265), 1, 'Ulylar üçin arlyk SELPED standart orta razmer 80 sm -115 sm'),
                     ((SELECT id FROM inserted265), 2, 'Подгузники для взрослых SELPED STANDART MEDIUM SIZE 80 CM - 115 CM '),
                     ((SELECT id FROM inserted265), 3, 'Adult diapers SELPED standart medium size 80 cm -115 cm')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted267 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Прокладки  женские  "Sen comfort"  290 mm Dry 6183 ', '4833009780026', 15, 1745)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans267 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted267), 1, 'Zenan prokladkalar SEN COMFORT 290 mm Gury 6183'),
                     ((SELECT id FROM inserted267), 2, 'Прокладки  женские  "Sen comfort"  290 mm Dry 6183 '),
                     ((SELECT id FROM inserted267), 3, 'Women's pads SEN COMFORT 290 mm Dry 6183 ')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted268 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Прокладки  женские "Sen comfort"  290 mm Soft  6182', '4833009780019', 15, 1606)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans268 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted268), 1, 'Zenan prokladkalar SEN COMFORT 290 mm Ýumşak 6182'),
                     ((SELECT id FROM inserted268), 2, 'Прокладки  женские "Sen comfort"  290 mm Soft  6182'),
                     ((SELECT id FROM inserted268), 3, 'Women's pads SEN COMFORT 290 mm Soft  6182')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted269 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Прокладки женские "Sen comfort" 245 mm Dry 2081', '9506000061818', 15, 73898)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans269 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted269), 1, 'Zenan prokladkalar SEN COMFORT 245 mm Gury 2081'),
                     ((SELECT id FROM inserted269), 2, 'Прокладки женские "Sen comfort" 245 mm Dry 2081'),
                     ((SELECT id FROM inserted269), 3, 'Women's pads SEN COMFORT 245 mm Dry 2081')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted270 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Прокладки женские "SEN COMFORT" 290 mm  Dry 6183 (Импорт)', '4833009780026', 15, 2)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans270 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted270), 1, 'Zenan prokladkalar SEN COMFORT 290 mm Gury 6183 (Import)'),
                     ((SELECT id FROM inserted270), 2, 'Прокладки женские "SEN COMFORT" 290 mm  Dry 6183 (Импорт)'),
                     ((SELECT id FROM inserted270), 3, 'Women's pads SEN COMFORT 290 mm  Dry 6183 (Imported)')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ), inserted271 AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('Прокладки женские "SEN COMFORT" 290 mm Soft 6182 (Импорт)', '4833009780019', 15, 79)
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans271 AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted271), 1, 'Zenan prokladkalar SEN COMFORT 290 mm Ýumşak 6182 (Import)'),
                     ((SELECT id FROM inserted271), 2, 'Прокладки женские "SEN COMFORT" 290 mm Soft 6182 (Импорт)'),
                     ((SELECT id FROM inserted271), 3, 'Women's pads SEN COMFORT 290 mm  Soft 6182 (Imported)')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                ) SELECT 1