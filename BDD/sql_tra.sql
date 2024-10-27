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

SELECT Change_Fidelity_Points('Client28314769-0ba2-484c-8009-5a683c85bf4c', 0);

CREATE OR REPLACE FUNCTION Change_Reclamation_Resp_State(var1 BOOLEAN, var2 TEXT)
        RETURNS TEXT
       AS $$
            BEGIN
                UPDATE reclamationresp
                SET responsevalid = $1
                WHERE responseid = $2;
                RETURN 'Update Successful';
            end;
$$LANGUAGE plpgsql;

SELECT Change_Reclamation_Resp_State('Client28314769-0ba2-484c-8009-5a683c85bf4c', 0);

CREATE OR REPLACE FUNCTION Change_Commande_State(var1 BOOLEAN, var2 TEXT)
        RETURNS TEXT
       AS $$
            BEGIN
                UPDATE commande
                SET commandeconfirm = $1
                WHERE commandeid = $2;
                RETURN 'Update Successful';
            end;
$$LANGUAGE plpgsql;

SELECT Change_Commande_State('Client28314769-0ba2-484c-8009-5a683c85bf4c', 0);

CREATE OR REPLACE FUNCTION Change_Menu_Plat_State(var1 BOOLEAN, var2 TEXT)
        RETURNS TEXT
       AS $$
            BEGIN
                UPDATE menuplat
                SET instock = $1
                WHERE plateid = $2;
                RETURN 'Update Successful';
            end;
$$LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION Delete_Employee(var TEXT)
RETURNS TEXT
AS $$
    BEGIN
        DELETE FROM employee
        WHERE employee.employeeid = $1;
        RETURN 'Delete Successful';
    end;
$$LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION Delete_Menu(var TEXT)
RETURNS TEXT
AS $$
    BEGIN
        DELETE FROM menu
        CASCADE
        WHERE menuid = $1;

        RETURN 'Delete Successful';
    end;
$$LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION Delete_Menu_Plat(var TEXT)
RETURNS TEXT
AS $$
    BEGIN
        DELETE FROM menuplat
        WHERE menuplat.plateid = $1;
        RETURN 'Delete Successful';
    end;
$$LANGUAGE plpgsql;

SELECT delete_menu_plat('Plat8b485a73-8750-4901-9d7c-43e37deac670');


CREATE OR REPLACE FUNCTION Delete_Promo_Plat(var TEXT)
RETURNS TEXT
AS $$
    BEGIN
        DELETE FROM promoplat
        WHERE promoplat.plateid = $1;
        RETURN 'Delete Successful';
    end;
$$LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION Delete_Event(var TEXT)
RETURNS TEXT
AS $$
    BEGIN
        DELETE FROM evenements
        WHERE evenements.eventid = $1;
        RETURN 'Delete Successful';
    end;
$$LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION Delete_Promo(var TEXT)
RETURNS TEXT
AS $$
    BEGIN
        DELETE FROM promotion
        CASCADE
        WHERE promotionid = $1;
        RETURN 'Delete Successful';
    end;
$$LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION Delete_Plat(var TEXT)
RETURNS TEXT
AS $$
    BEGIN
        DELETE FROM plat
        CASCADE
        WHERE plateid = $1;
        RETURN 'Delete Successful';
    end;
$$LANGUAGE plpgsql;