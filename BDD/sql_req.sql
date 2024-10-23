CREATE OR REPLACE FUNCTION Get_Promo_Plates(var1 DATE)
        RETURNS TABLE(platename Nom, platedescription VARCHAR, platimage bytea,platprice INT, promotionrate promrate)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT  Plat.platename, Plat.platedescription, Plat.platimage, Plat.platprice, Promotion.promotionrate
                    FROM    (plat JOIN promoplat USING (plateid)) JOIN promotion USING (promotionid)
                    WHERE $1 BETWEEN promotionstart AND promotionend;
            end;
$$LANGUAGE plpgsql;

SELECT * FROM Get_Promo_Plates('2024-10-20');

CREATE OR REPLACE FUNCTION Get_Menu_Plates(var1 DATE)
        RETURNS TABLE(platename Nom, platedescription VARCHAR, platimage bytea,platprice INT)
       AS $$
            BEGIN
                RETURN QUERY
                    SELECT  Plat.platename, Plat.platedescription, Plat.platimage, Plat.platprice
                    FROM (Plat JOIN MenuPlat USING (plateid)) JOIN Menu USING (menuid)
                    WHERE $1 = Menu.menudate AND (Plat.platename, Plat.platedescription, Plat.platimage, Plat.platprice)NOT IN(
                            SELECT  Plat.platename, Plat.platedescription, Plat.platimage, Plat.platprice
                            FROM (((Plat JOIN MenuPlat USING (plateid)) JOIN Menu USING (menuid)) JOIN promoplat USING (plateid)) JOIN promotion USING (promotionid)
                            WHERE $1 = Menu.menudate AND $1 BETWEEN promotion.promotionstart AND promotion.promotionend
                        );
            end;
$$LANGUAGE plpgsql;

--ADD EPUISE TO MENU AND PROMOTION

SELECT * FROM Get_Menu_Plates('2024-10-20');

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

CREATE OR REPLACE FUNCTION Change_Fidelity_Points(var1 TEXT, var2 INT)
        RETURNS TEXT
       AS $$
            BEGIN
                UPDATE client
                SET fidelitypoints = $2
                WHERE clientid = $1;
                RETURN 'Update Successful';
            end;
$$LANGUAGE plpgsql;

SELECT Change_Fidelity_Points('Client07436bcb-0043-4cb9-b0b5-c3727957e756', 10);


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
DROP FUNCTION Check_Parrain;

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
