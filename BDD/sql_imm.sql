/*
- function to get the stored email and password from the database
table(Client) so that i can compare it to what the user entered
*/
CREATE OR REPLACE FUNCTION Get_Client_Info(clientEmail TEXT, clientSecret TEXT)
RETURNS BOOLEAN
AS $$
    BEGIN
        IF ($1, $2) IN (SELECT Client.clientEmail, Client.clientSecret FROM Client) THEN
            RETURN TRUE;
            else
            RETURN FALSE;
        end if;
    end;
$$LANGUAGE plpgsql;


-----

/*
- Functions to insert to the different tables when storing data from the application
*/

-- Write to Client
CREATE OR REPLACE FUNCTION Write_To_Client(var1 TEXT, var2 TEXT, var3 TEXT, var4 TEXT, var5 INT, var6 DATE, var7 TEXT, var8 TEXT)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO Client(clientid, clientname, clientemail, clienttel, fidelitypoints, registrydate, accountstate, clientsecret)
        VALUES($1,$2,$3,$4,$5,$6,$7,$8);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

SELECT Write_To_Client('Client8b485a73-8750-4901-9d7c-43e37deac673','John','engolo@gmail.com','697889556',0,'2024-10-14','activé','Hopdop21');
-- Write to MiniJeu
CREATE OR REPLACE FUNCTION Write_To_MiniJeu(var1 TEXT, var2 DATE)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO MiniJeu (quizid, quizdate)
        VALUES($1,$2);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

SELECT Write_To_MiniJeu('Quiz8b485a73-8750-4901-9d7c-43e37deac670', '2024-10-19');
SELECT Write_To_MiniJeu('Quiz8b485a73-8750-4901-9d7c-43e37deac671', '2024-10-20');
SELECT Write_To_MiniJeu('Quiz8b485a73-8750-4901-9d7c-43e37deac672', '2024-10-21');
SELECT Write_To_MiniJeu('Quiz8b485a73-8750-4901-9d7c-43e37deac673', '2024-10-23');

-- Write to Question
CREATE OR REPLACE FUNCTION Write_To_Question(var1 INT, var2 TEXT, var3 TEXT, var4 TEXT)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO Question(questionnum, quizid, quizQuestion ,answer)
        VALUES($1,$2,$3,$4);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

SELECT Write_To_Question(1, 'Quiz8b485a73-8750-4901-9d7c-43e37deac670', '1+1', '2');
SELECT Write_To_Question(2, 'Quiz8b485a73-8750-4901-9d7c-43e37deac670','2+2', '4');
SELECT Write_To_Question(3, 'Quiz8b485a73-8750-4901-9d7c-43e37deac670','3+3', '6');
SELECT Write_To_Question(4, 'Quiz8b485a73-8750-4901-9d7c-43e37deac670','4+4', '8');
SELECT Write_To_Question(5, 'Quiz8b485a73-8750-4901-9d7c-43e37deac670','5+5', '10');
SELECT Write_To_Question(1, 'Quiz8b485a73-8750-4901-9d7c-43e37deac671','7+7', '14');
SELECT Write_To_Question(2, 'Quiz8b485a73-8750-4901-9d7c-43e37deac671','8+8', '16');
SELECT Write_To_Question(3, 'Quiz8b485a73-8750-4901-9d7c-43e37deac671','9+9', '18');

SELECT Write_To_Question(1, 'Quiz8b485a73-8750-4901-9d7c-43e37deac672', '1+1', '2');
SELECT Write_To_Question(2, 'Quiz8b485a73-8750-4901-9d7c-43e37deac672','2+2', '4');
SELECT Write_To_Question(3, 'Quiz8b485a73-8750-4901-9d7c-43e37deac672','3+3', '6');
SELECT Write_To_Question(4, 'Quiz8b485a73-8750-4901-9d7c-43e37deac672','4+4', '8');
SELECT Write_To_Question(5, 'Quiz8b485a73-8750-4901-9d7c-43e37deac672','5+5', '10');

SELECT Write_To_Question(1, 'Quiz8b485a73-8750-4901-9d7c-43e37deac673', '1+1', '2');
SELECT Write_To_Question(2, 'Quiz8b485a73-8750-4901-9d7c-43e37deac673','2+2', '4');
SELECT Write_To_Question(3, 'Quiz8b485a73-8750-4901-9d7c-43e37deac673','3+3', '6');
SELECT Write_To_Question(4, 'Quiz8b485a73-8750-4901-9d7c-43e37deac673','4+4', '8');
SELECT Write_To_Question(5, 'Quiz8b485a73-8750-4901-9d7c-43e37deac673','5+5', '10');

-- Write to Plat
CREATE OR REPLACE FUNCTION Write_To_Plat(var1 TEXT, var2 TEXT, var3 TEXT, var4 bytea, var5 INT)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO Plat(plateid, platename, platedescription, platimage, platprice)
        VALUES($1,$2,$3,$4,$5);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

SELECT Write_To_Plat('Plat8b485a73-8750-4901-9d7c-43e37deac670', 'Ndole', 'Ndole miondo', '3', 1000);
SELECT Write_To_Plat('Plat8b485a73-8750-4901-9d7c-43e37deac671', 'Cassoulet', 'Cassoulet riz', '2', 1000);
SELECT Write_To_Plat('Plat8b485a73-8750-4901-9d7c-43e37deac672', 'Pile', 'Cassoulet riz', '2', 1500);

-- Write to Menu
CREATE OR REPLACE FUNCTION Write_To_Menu(var1 TEXT, var2 DATE)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO Menu(menuid, menudate)
        VALUES($1,$2);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

SELECT Write_To_Menu('Menu8b485a73-8750-4901-9d7c-43e37deac670', '2024-10-16');
SELECT Write_To_Menu('Menu8b485a73-8750-4901-9d7c-43e37deac671', '2024-10-15');
SELECT Write_To_Menu('Menu8b485a73-8750-4901-9d7c-43e37deac672', '2024-10-18');
SELECT Write_To_Menu('Menu8b485a73-8750-4901-9d7c-43e37deac673', '2024-10-19');
SELECT Write_To_Menu('Menu8b485a73-8750-4901-9d7c-43e37deac674', '2024-10-20');
SELECT Write_To_Menu('Menu8b485a73-8750-4901-9d7c-43e37deac675', '2024-10-21');


-- Write to MenuPlat
CREATE OR REPLACE FUNCTION Write_To_MenuPlat(var1 TEXT, var2 TEXT)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO MenuPlat(menuid, plateid)
        VALUES($1,$2);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

SELECT Write_To_MenuPlat('Menu8b485a73-8750-4901-9d7c-43e37deac670', 'Plat8b485a73-8750-4901-9d7c-43e37deac670');
SELECT Write_To_MenuPlat('Menu8b485a73-8750-4901-9d7c-43e37deac670', 'Plat8b485a73-8750-4901-9d7c-43e37deac671');
SELECT Write_To_MenuPlat('Menu8b485a73-8750-4901-9d7c-43e37deac671', 'Plat8b485a73-8750-4901-9d7c-43e37deac672');
SELECT Write_To_MenuPlat('Menu8b485a73-8750-4901-9d7c-43e37deac672', 'Plat8b485a73-8750-4901-9d7c-43e37deac670');
SELECT Write_To_MenuPlat('Menu8b485a73-8750-4901-9d7c-43e37deac672', 'Plat8b485a73-8750-4901-9d7c-43e37deac671');
SELECT Write_To_MenuPlat('Menu8b485a73-8750-4901-9d7c-43e37deac672', 'Plat8b485a73-8750-4901-9d7c-43e37deac672');
SELECT Write_To_MenuPlat('Menu8b485a73-8750-4901-9d7c-43e37deac673', 'Plat8b485a73-8750-4901-9d7c-43e37deac671');
SELECT Write_To_MenuPlat('Menu8b485a73-8750-4901-9d7c-43e37deac673', 'Plat8b485a73-8750-4901-9d7c-43e37deac672');
SELECT Write_To_MenuPlat('Menu8b485a73-8750-4901-9d7c-43e37deac674', 'Plat8b485a73-8750-4901-9d7c-43e37deac671');
SELECT Write_To_MenuPlat('Menu8b485a73-8750-4901-9d7c-43e37deac674', 'Plat8b485a73-8750-4901-9d7c-43e37deac672');
SELECT Write_To_MenuPlat('Menu8b485a73-8750-4901-9d7c-43e37deac675', 'Plat8b485a73-8750-4901-9d7c-43e37deac671');
SELECT Write_To_MenuPlat('Menu8b485a73-8750-4901-9d7c-43e37deac675', 'Plat8b485a73-8750-4901-9d7c-43e37deac672');
SELECT Write_To_MenuPlat('Menu8b485a73-8750-4901-9d7c-43e37deac675', 'Plat8b485a73-8750-4901-9d7c-43e37deac670');



-- Write to Promotion
CREATE OR REPLACE FUNCTION Write_To_Promotion(var1 TEXT, var2 DATE, var3 DATE, var4 INT)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO Promotion(promotionid, promotionstart, promotionend, promotionrate)
        VALUES($1,$2,$3,$4);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

SELECT Write_To_Promotion('Promo8b485a73-8750-4901-9d7c-43e37deac670', '2024-10-13', '2024-10-17', '10');
SELECT Write_To_Promotion('Promo8b485a73-8750-4901-9d7c-43e37deac671', '2024-10-13', '2024-10-17', '25');
SELECT Write_To_Promotion('Promo8b485a73-8750-4901-9d7c-43e37deac672', '2024-10-13', '2024-10-14', '15');
SELECT Write_To_Promotion('Promo8b485a73-8750-4901-9d7c-43e37deac673', '2024-10-17', '2024-10-19', '50');
SELECT Write_To_Promotion('Promo8b485a73-8750-4901-9d7c-43e37deac674', '2024-10-19', '2024-10-20', '25');
SELECT Write_To_Promotion('Promo8b485a73-8750-4901-9d7c-43e37deac675', '2024-10-21', '2024-10-22', '25');

-- Write to PromoPlat
CREATE OR REPLACE FUNCTION Write_To_PromoPlat(var1 TEXT, var2 TEXT)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO PromoPlat(promotionid, plateid)
        VALUES($1,$2);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

SELECT Write_To_PromoPlat('Promo8b485a73-8750-4901-9d7c-43e37deac670','Plat8b485a73-8750-4901-9d7c-43e37deac670');
SELECT Write_To_PromoPlat('Promo8b485a73-8750-4901-9d7c-43e37deac670','Plat8b485a73-8750-4901-9d7c-43e37deac671');
SELECT Write_To_PromoPlat('Promo8b485a73-8750-4901-9d7c-43e37deac672','Plat8b485a73-8750-4901-9d7c-43e37deac671');
SELECT Write_To_PromoPlat('Promo8b485a73-8750-4901-9d7c-43e37deac673','Plat8b485a73-8750-4901-9d7c-43e37deac670');
SELECT Write_To_PromoPlat('Promo8b485a73-8750-4901-9d7c-43e37deac673','Plat8b485a73-8750-4901-9d7c-43e37deac671');
SELECT Write_To_PromoPlat('Promo8b485a73-8750-4901-9d7c-43e37deac674','Plat8b485a73-8750-4901-9d7c-43e37deac671');
SELECT Write_To_PromoPlat('Promo8b485a73-8750-4901-9d7c-43e37deac675','Plat8b485a73-8750-4901-9d7c-43e37deac671');

-- Write to Commande
CREATE OR REPLACE FUNCTION Write_To_Commande(var1 TEXT, var2 TEXT, var3 INT, var4 INT, var5 DATE, var6 BOOLEAN)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO Commande(commandeid, clientid, commandetotal, commandepoints, commandedate, commandeconfirm)
        VALUES($1,$2,$3,$4,$5,$6);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

-- Write to Parrain
CREATE OR REPLACE FUNCTION Write_To_Parrain(var1 TEXT, var2 TEXT)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO Parrain(parrainid, parraincode)
        VALUES($1,$2);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

-- Write to Filleul
CREATE OR REPLACE FUNCTION Write_To_Filleul(var1 TEXT, var2 TEXT)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO Filleul(filleulid, parrainid)
        VALUES($1,$2);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

-- Write to Evenements
CREATE OR REPLACE FUNCTION Write_To_Evenements(var1 TEXT, var2 TEXT,var3 TEXT, var4 DATE, var5 bytea)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO Evenements(eventid,eventname, eventdescription, eventdate, eventimage)
        VALUES($1,$2,$3,$4,$5);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

SELECT Write_To_Evenements('Event8b485a73-8750-4901-9d7c-43e37deac670','Billard', 'Billard au Zeduc!', '2024-10-20', '3');
SELECT Write_To_Evenements('Event8b485a73-8750-4901-9d7c-43e37deac671','Basket', 'Basket au Zeduc!', '2024-10-21', '5');
SELECT Write_To_Evenements('Event8b485a73-8750-4901-9d7c-43e37deac672', 'Football','Football au Zeduc!', '2024-10-22', '4');
SELECT Write_To_Evenements('Event8b485a73-8750-4901-9d7c-43e37deac673','Jeux', 'Jeux au Zeduc!', '2024-10-23', '4');
SELECT Write_To_Evenements('Event8b485a73-8750-4901-9d7c-43e37deac674','Film' ,'Film au Zeduc!', '2024-10-24', '4');

-- Write to Reclamation
CREATE OR REPLACE FUNCTION Write_To_Reclamation(var1 TEXT, var2 TEXT, var3 DATE, var4 TEXT)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO Reclamation(reclamationid, commandeid, reclamationdate, reclamationdescription)
        VALUES($1,$2,$3,$4);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

-- Write to ReclamationResp
CREATE OR REPLACE FUNCTION Write_To_Resp(var1 TEXT, var2 TEXT, var3 TEXT, var4 BOOLEAN)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO ReclamationResp (responseid, reclamationid, response, responsevalid)
        VALUES($1,$2,$3,$4);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

-- Write to Parametre
CREATE OR REPLACE FUNCTION Write_To_Parametre(var1 TEXT, var2 TEXT, var3 TEXT, var4 TEXT, var5 TEXT, var6 FLOAT)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO Parametre(settingid, adminid, hoursopen, hoursclosed, politique, conversionrate)
        VALUES($1,$2,$3,$4,$5,$6);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

