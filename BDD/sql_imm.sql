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

-- Write to Question
CREATE OR REPLACE FUNCTION Write_To_Question(var1 INT, var2 TEXT, var3 TEXT)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO Question(questionnum, quizid, answer)
        VALUES($1,$2,$3);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

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

-- Write to Commande
CREATE OR REPLACE FUNCTION Write_To_Commande(var1 TEXT, var2 TEXT, var3 INT, var4 INT, var5 DATE, var6 BOOLEAN)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO Commande(commandeid, userid, commandetotal, commandepoints, commandedate, commandeconfirm)
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
CREATE OR REPLACE FUNCTION Write_To_Evenements(var1 TEXT, var2 TEXT, var3 DATE)
RETURNS TEXT
AS $$
    BEGIN
        INSERT INTO Evenements(eventid, eventdescription,eventDate)
        VALUES($1,$2,$3);
        RETURN 'Insertion Successful';
    end;
$$LANGUAGE plpgsql;

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

