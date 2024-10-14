CREATE OR REPLACE FUNCTION Get_Fournisseurs()
RETURNS TABLE(idOrganisation organisation_id)
AS $$
    BEGIN
        RETURN QUERY
            SELECT organisation.idOrganisation
            FROM organisation
            WHERE type_o = 'Fournisseur';
    end;
$$LANGUAGE plpgsql;

DROP FUNCTION Get_Fournisseurs();