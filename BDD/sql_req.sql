CREATE OR REPLACE FUNCTION Get_Promo_Plates(var1 DATE)
        RETURNS TABLE(platename Nom, platedescription VARCHAR, platimage bytea,platprice INT, promotionrate promrate)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT  Plat.platename, Plat.platedescription, Plat.platimage, Plat.platprice, promotion.promotionrate
                    FROM (((Plat JOIN MenuPlat USING (plateid)) JOIN Menu USING (menuid)) JOIN promoplat USING (plateid)) JOIN promotion USING (promotionid)
                    WHERE menuplat.instock = true AND $1 = Menu.menudate AND $1 BETWEEN promotion.promotionstart AND promotion.promotionend;
            end;
$$LANGUAGE plpgsql;

SELECT * FROM Get_Promo_Plates('2024-10-25');
DROP FUNCTION Get_Promo_Plates;

CREATE OR REPLACE FUNCTION Get_Menu_Plates(var1 DATE)
        RETURNS TABLE(platename Nom, platedescription VARCHAR, platimage bytea,platprice INT)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT  Plat.platename, Plat.platedescription, Plat.platimage, Plat.platprice
                    FROM (Plat JOIN MenuPlat USING (plateid)) JOIN Menu USING (menuid)
                    WHERE menuplat.instock = true AND $1 = Menu.menudate AND (Plat.platename, Plat.platedescription, Plat.platimage, Plat.platprice)NOT IN(
                            SELECT  Plat.platename, Plat.platedescription, Plat.platimage, Plat.platprice
                            FROM (((Plat JOIN MenuPlat USING (plateid)) JOIN Menu USING (menuid)) JOIN promoplat USING (plateid)) JOIN promotion USING (promotionid)
                            WHERE menuplat.instock = true AND $1 = Menu.menudate AND $1 BETWEEN promotion.promotionstart AND promotion.promotionend
                        );
            end;
$$LANGUAGE plpgsql;

--ADD EPUISE TO MENU AND PROMOTION

SELECT * FROM Get_Menu_Plates('2024-10-25');


CREATE OR REPLACE FUNCTION Get_Menu(var1 DATE)
        RETURNS TABLE(menuId idmenu,plateId idplate ,platename Nom, platedescription VARCHAR, platimage bytea,platprice INT)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT menu.menuid,plat.plateid ,Plat.platename, Plat.platedescription, Plat.platimage, Plat.platprice
                    FROM (menuplat JOIN menu USING (menuid)) JOIN plat USING (plateid)
                    WHERE menu.menudate = $1;
            end;
$$LANGUAGE plpgsql;

--ADD EPUISE TO MENU_PLAT

SELECT * FROM Get_Menu('2024-10-24');
DROP FUNCTION Get_Menu;

CREATE OR REPLACE FUNCTION Get_Promotion(var1 DATE)
        RETURNS TABLE(promotionId idpromo,plateId idplate ,platename Nom, platedescription VARCHAR, platimage bytea,platprice INT)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT promotion.promotionid,plat.plateid ,Plat.platename, Plat.platedescription, Plat.platimage, Plat.platprice
                    FROM (promoplat JOIN promotion USING (promotionid)) JOIN plat USING (plateid)
                    WHERE promotion.promotionend >= $1;
            end;
$$LANGUAGE plpgsql;

--ADD EPUISE TO MENU_PLAT

SELECT * FROM Get_Promotion('2024-10-25');

CREATE OR REPLACE FUNCTION Get_Promotion_List(var1 DATE)
       RETURNS TABLE(promotionid idpromo, promotionstart DATE, promotionend DATE, promotionrate promrate)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT promotion.promotionid, promotion.promotionstart, promotion.promotionend, promotion.promotionrate
                    FROM promotion
                    WHERE promotion.promotionend >= $1;
            end;
$$LANGUAGE plpgsql;

SELECT * FROM Get_Promotion_List('2024-10-24');




CREATE OR REPLACE FUNCTION Get_Future_Events(var1 DATE)
        RETURNS TABLE(eventid IdEvent,eventname Nom, eventdescription VARCHAR, eventDate DATE, eventimage bytea)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT  Evenements.eventid, Evenements.eventname, Evenements.eventdescription, Evenements.eventDate, Evenements.eventimage
                    FROM    Evenements
                    WHERE ($1 < Evenements.eventDate);
            end;
$$LANGUAGE plpgsql;

SELECT * FROM Get_Future_Events('2024-10-20');
DROP FUNCTION Get_Future_Events;

CREATE OR REPLACE FUNCTION Get_Today_Events(var1 DATE)
        RETURNS TABLE(eventid IdEvent,eventname Nom, eventdescription VARCHAR, eventDate DATE, eventimage bytea)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT  Evenements.eventid, Evenements.eventname, Evenements.eventdescription, Evenements.eventDate, Evenements.eventimage
                    FROM    Evenements
                    WHERE ($1 = Evenements.eventDate);
            end;
$$LANGUAGE plpgsql;

SELECT * FROM Get_Today_Events('2024-10-20');
DROP FUNCTION Get_Today_Events;

CREATE OR REPLACE FUNCTION Get_Quiz_Quest(var1 DATE)
        RETURNS TABLE(questionNum SMALLINT, quizQuestion VARCHAR, answer VARCHAR)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT  question.questionNum, question.quizQuestion, question.answer
                    FROM    minijeu JOIN question USING (quizid)
                    WHERE ($1 = minijeu.quizdate);
            end;
$$LANGUAGE plpgsql;

SELECT * FROM Get_Quiz_Quest('2024-10-19');

CREATE OR REPLACE FUNCTION Get_Quiz_Quest(var1 DATE)
        RETURNS TABLE(questionNum SMALLINT, quizQuestion VARCHAR, answer VARCHAR)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT  question.questionNum, question.quizQuestion, question.answer
                    FROM    minijeu JOIN question USING (quizid)
                    WHERE ($1 = minijeu.quizdate);
            end;
$$LANGUAGE plpgsql;

SELECT * FROM Get_Quiz_Quest('2024-10-19');

CREATE OR REPLACE FUNCTION Get_Quiz_Quest(var1 DATE)
        RETURNS TABLE(questionNum SMALLINT, quizQuestion VARCHAR, answer VARCHAR)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT  question.questionNum, question.quizQuestion, question.answer
                    FROM    minijeu JOIN question USING (quizid)
                    WHERE ($1 = minijeu.quizdate);
            end;
$$LANGUAGE plpgsql;

SELECT * FROM Get_Quiz_Quest('2024-10-20');

CREATE OR REPLACE FUNCTION Get_Fidelity_Points(var1 TEXT)
        RETURNS TABLE(fidelityPoints  INT)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT  client.fidelityPoints
                    FROM    Client
                    WHERE ($1 = client.clientid);
            end;
$$LANGUAGE plpgsql;

SELECT * FROM Get_Fidelity_Points('Client07436bcb-0043-4cb9-b0b5-c3727957e756');

CREATE OR REPLACE FUNCTION Find_Parrain(var1 TEXT)
        RETURNS TABLE(parrainid idclient)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT parrain.parrainid
                    FROM    parrain
                    WHERE $1 = parrain.parraincode;
            end;
$$LANGUAGE plpgsql;

SELECT * FROM Find_Parrain('Client');

CREATE OR REPLACE FUNCTION Find_Parrain_Code(var1 TEXT)
        RETURNS TABLE(parraincode VARCHAR)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT parrain.parraincode
                    FROM    parrain
                    WHERE $1 = parrain.parrainId;
            end;
$$LANGUAGE plpgsql;

SELECT * FROM Find_Parrain_Code('Client07436bcb-0043-4cb9-b0b5-c3727957e756');

CREATE OR REPLACE FUNCTION Check_Filleul(var1 TEXT)
        RETURNS TABLE(parrainid idclient)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT filleul.parrainid
                    FROM    filleul
                    WHERE $1 = filleul.filleulid;
            end;
$$LANGUAGE plpgsql;

SELECT * FROM Check_Filleul('Client');

CREATE OR REPLACE FUNCTION Get_Command_History(var1 TEXT)
    RETURNS TABLE(commandeId idcommande, commandeTotal INT, commandePoints INT, commandeDate DATE)
    AS $$
        BEGIN
            RETURN QUERY
                SELECT commande.commandeId, commande.commandeTotal, commande.commandePoints, commande.commandeDate
                FROM commande
                WHERE commande.clientid = $1;
        end;

$$LANGUAGE plpgsql;

SELECT * FROM Get_Command_History('Client07436bcb-0043-4cb9-b0b5-c3727957e756');

SELECT client.clientname,COUNT(commande.commandeid) AS TotalCommande
FROM commande JOIN client USING (clientid)
GROUP BY commande.clientid, client.clientname
ORDER BY TotalCommande DESC;

CREATE OR REPLACE FUNCTION Get_Classement()
    RETURNS TABLE(clientname NOM, TotalCommande BIGINT)
    AS $$
        BEGIN
            RETURN QUERY
                SELECT client.clientname,COUNT(commande.commandeid) AS TotalCommande
                FROM commande JOIN client USING (clientid)
                GROUP BY commande.clientid, client.clientname
                ORDER BY TotalCommande DESC;
        end;
$$LANGUAGE plpgsql;
DROP FUNCTION Get_Classement();

SELECT * FROM Get_Classement() LIMIT 2;

CREATE OR REPLACE FUNCTION Get_Admin(var1 TEXT)
    RETURNS TABLE(adminid idadmin, adminsecret pass)
    AS $$
        BEGIN
            RETURN QUERY
                SELECT admin.adminid, admin.adminsecret
                FROM admin
                WHERE admin.adminid = $1;
        end;

$$LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION Get_Gerant(var1 TEXT)
    RETURNS TABLE(gerantid idgerant, gerantsecret pass)
    AS $$
        BEGIN
            RETURN QUERY
                SELECT gerant.gerantid, gerant.gerantsecret
                FROM gerant
                WHERE gerant.gerantid = $1;
        end;

$$LANGUAGE plpgsql;

SELECT * FROM Get_Admin('Admin010101010101010101010101010101010101');

CREATE OR REPLACE FUNCTION Get_Client(var1 TEXT)
    RETURNS TABLE(clientid idclient, clientname nom, clientemail email, clienttel tel, fidelitypoints INT, registrydate DATE, accountstate accstate, clientsecret pass, clientLocation VARCHAR)
    AS $$
        BEGIN
            RETURN QUERY
                SELECT *
                FROM client
                WHERE client.clientemail = $1;
        end;

$$LANGUAGE plpgsql;

DROP FUNCTION Get_Client;

SELECT * FROM Get_Client('engolo@gmail.com');

CREATE OR REPLACE FUNCTION Get_All_Employees()
    RETURNS TABLE(employeeid idemployee, employeename nom, employeeemail email, registrydate DATE, employeesecret pass)
    AS $$
        BEGIN
            RETURN QUERY
                SELECT employee.employeeid, employee.employeename, employee.employeeemail, employee.registrydate, employee.employeesecret
                FROM employee;
        end;

$$LANGUAGE plpgsql;

DROP FUNCTION Get_All_Employees;

SELECT * FROM Get_All_Employees();

CREATE OR REPLACE FUNCTION Get_Employee(var1 TEXT)
    RETURNS TABLE(employeeid idemployee, employeename nom, employeeemail email, registrydate DATE, employeesecret pass)
    AS $$
        BEGIN
            RETURN QUERY
                SELECT employee.employeeid, employee.employeename, employee.employeeemail, employee.registrydate, employee.employeesecret
                FROM employee
                WHERE employee.employeeemail = $1;
        end;

$$LANGUAGE plpgsql;

DROP FUNCTION Get_Employee;

SELECT * FROM Get_Employee('Mars@gmail.com');

CREATE OR REPLACE FUNCTION Get_All_Plates()
    RETURNS TABLE(plateId idplate, plateName nom, platPrice INT)
    AS $$
        BEGIN
            RETURN QUERY
                SELECT plat.plateId, plat.plateName, plat.platPrice
                FROM plat;
        end;

$$LANGUAGE plpgsql;

DROP FUNCTION Get_All_Plates();

SELECT * FROM Get_All_Plates();

CREATE OR REPLACE FUNCTION Get_Events(var1 DATE)
    RETURNS TABLE(eventid idevent, eventname nom, eventdescription VARCHAR, eventdate DATE, eventimage bytea)
    AS $$
        BEGIN
            RETURN QUERY
                SELECT  Evenements.eventid, Evenements.eventname, Evenements.eventdescription, Evenements.eventDate, Evenements.eventimage
                FROM    Evenements
                WHERE   ($1 <= Evenements.eventDate);
        end;
$$LANGUAGE plpgsql;

SELECT * FROM Get_Events('2024-10-24');
DROP FUNCTION Get_Events;


CREATE OR REPLACE FUNCTION Get_Reclamations()
    RETURNS TABLE(reclamationid idrec, clientid idclient, reclamationdate DATE, reclamationdescription VARCHAR)
    AS $$
        BEGIN
            RETURN QUERY
                SELECT  reclamation.reclamationid, commande.clientid, reclamation.reclamationdate, reclamation.reclamationdescription
                FROM    (reclamation JOIN commande USING (commandeid));
        end;
$$LANGUAGE plpgsql;

SELECT * FROM Get_Reclamations();
DROP FUNCTION Get_Reclamations;

CREATE OR REPLACE FUNCTION Get_Reclamations_Resp()
    RETURNS TABLE(responseid idresp, reclamationid idrec, employeeid idemployee, response VARCHAR, responsevalid BOOLEAN)
    AS $$
        BEGIN
            RETURN QUERY
                SELECT  reclamationresp.responseid, reclamationresp.reclamationid, reclamationresp.employeeid, reclamationresp.response, reclamationresp.responsevalid
                FROM    reclamationresp;
        end;
$$LANGUAGE plpgsql;

SELECT * FROM Get_Reclamations_Resp();
DROP FUNCTION Get_Reclamations_Resp;

CREATE OR REPLACE FUNCTION Get_Commandes_Unconfirmed(var1 Date)
    RETURNS TABLE(commandeid idcommande, clientid idclient, clientlocation VARCHAR, commandetotal INT)
    AS $$
        BEGIN
            RETURN QUERY
                SELECT  commande.commandeid, client.clientid, client.clientlocation, commande.commandetotal
                FROM    commande JOIN client USING (clientid)
                WHERE   ($1 = commande.commandedate AND commandeconfirm = false);
        end;
$$LANGUAGE plpgsql;

SELECT * FROM Get_Commandes_Unconfirmed('2024-10-25');
DROP FUNCTION Get_Commandes_Unconfirmed;



