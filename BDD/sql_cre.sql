/*
-- =========================================================================== A
Produit : Mon Miam Miam
Trimestre : 2024-10
Composant : sql_cre.sql
Encodage : UTF-8, sans BOM; fin de ligne Unix (LF)
Plateforme : PostgreSQL 9.4 à 16.2
Responsables : franck.engolo@2028.ucac-icam.com
Version : 0.1.1a
Statut : solution préliminaire
-- =========================================================================== A
*/

/*
-- =========================================================================== B
Création du schéma correspondant au modèle web documenté.
-- =========================================================================== B
*/

CREATE DOMAIN IdClient
    VARCHAR
    CONSTRAINT IdClient_inv CHECK (value SIMILAR TO 'Client[a-zA-Z0-9.-]{36}')
;

CREATE DOMAIN IdAdmin
    VARCHAR
    CONSTRAINT IdAdmin_inv CHECK (value SIMILAR TO 'Admin[a-zA-Z0-9.-]{36}')
;

CREATE DOMAIN Nom
    VARCHAR
    CONSTRAINT Nom_inv CHECK (length(value) > 0)
;

CREATE DOMAIN Email
  VARCHAR(512)
  CONSTRAINT Email_inv CHECK (
    LOWER(value) SIMILAR TO
      '[^][()<>:;@\,."[:space:][:cntrl:]]+(\.[^][()<>:;@\,."[:space:][:cntrl:]]+)*\@[^][()<>:;@\,."[:space:][:cntrl:]]+(\.[^][()<>:;@\,."[:space:][:cntrl:]]+)*')
;

CREATE DOMAIN Tel
    VARCHAR
    CONSTRAINT Tel_inv CHECK(length(value) = 9 AND VALUE SIMILAR TO ('[0-9]{9}'))
;

CREATE DOMAIN AccState
    VARCHAR
    CONSTRAINT AccState_inv CHECK(value IN('activé', 'désativé'))
;

CREATE DOMAIN IdQuiz
    VARCHAR
    CONSTRAINT IdQuiz_inv CHECK (value SIMILAR TO 'Quiz[a-zA-Z0-9.-]{36}')
;

CREATE DOMAIN IdPlate
    VARCHAR
    CONSTRAINT IdPlate_inv CHECK (value SIMILAR TO 'Plat[a-zA-Z0-9.-]{36}')
;

CREATE DOMAIN IdMenu
    VARCHAR
    CONSTRAINT IdMenu_inv CHECK (value SIMILAR TO 'Menu[a-zA-Z0-9.-]{36}')
;

CREATE DOMAIN IdPromo
    VARCHAR
    CONSTRAINT IdPromo_inv CHECK (value SIMILAR TO 'Promo[a-zA-Z0-9.-]{36}')
;

CREATE DOMAIN IdCommande
    VARCHAR
    CONSTRAINT IdCommande_inv CHECK (value SIMILAR TO 'Commande[a-zA-Z0-9.-]{36}')
;

CREATE DOMAIN IdEvent
    VARCHAR
    CONSTRAINT IdEvent_inv CHECK (value SIMILAR TO 'Event[a-zA-Z0-9.-]{36}')
;

CREATE DOMAIN IdRec
    VARCHAR
    CONSTRAINT IdRec_inv CHECK (value SIMILAR TO 'Rec[a-zA-Z0-9.-]{36}')
;

CREATE DOMAIN IdResp
    VARCHAR
    CONSTRAINT IdResp_inv CHECK (value SIMILAR TO 'Resp[a-zA-Z0-9.-]{36}')
;

CREATE DOMAIN IdSetting
    VARCHAR
    CONSTRAINT IdSetting_inv CHECK (value SIMILAR TO 'Plat[a-zA-Z0-9.-]{36}')
;

CREATE DOMAIN pass /*Add it to document*/
    VARCHAR
    CONSTRAINT pass_inv CHECK (length(value) > 7)
;

CREATE DOMAIN promRate
    INT
    CONSTRAINT promRate CHECK ( value BETWEEN 1 AND 100)
;

--
-- Tables et vues
--

CREATE TABLE Client
(
    clientId        IdClient    NOT NULL,
    clientName      Nom         NOT NULL,
    clientEmail     Email       NOT NULL    UNIQUE,
    clientTel       Tel         NOT NULL,
    fidelityPoints  INT         NOT NULL,
    registryDate    DATE        NOT NULL,
    accountState    AccState    NOT NULL,
    clientSecret    pass        NOT NULL,  /*Add it to document*/
    CONSTRAINT      client_cc0  PRIMARY KEY (clientId)
);

CREATE TABLE Admin
(
    adminId     IdAdmin     NOT NULL,
    adminSecret pass        NOT NULL,
    CONSTRAINT  admin_cc0   PRIMARY KEY (adminId)
);

CREATE TABLE MiniJeu
(
    quizId      IdQuiz      NOT NULL,
    quizDate    DATE        NOT NULL,
    CONSTRAINT  minijeu_cc0 PRIMARY KEY (quizId)
);

CREATE TABLE Question
(
    questionNum     SMALLINT        NOT NULL,
    quizId          IdQuiz          NOT NULL,
    quizQuestion    VARCHAR         NOT NULL, -- add to functions and documents
    answer          VARCHAR         NOT NULL,
    CONSTRAINT      question_cc0    PRIMARY KEY (questionNum,quizId),
    CONSTRAINT      question_cc1    FOREIGN KEY (quizId) REFERENCES MiniJeu
);

CREATE TABLE ClientJeu
(
    clientId      IdClient      NOT NULL,
    quizId        IdQuiz        NOT NULL,
    CONSTRAINT    clientjeu_cc0 PRIMARY KEY (clientId, quizId),
    CONSTRAINT    clientjeu_cc1 FOREIGN KEY (clientId) REFERENCES Client,
    CONSTRAINT    clientjeu_cc2 FOREIGN KEY (quizId) REFERENCES MiniJeu
);

CREATE TABLE Plat
(
    plateId             IdPlate         NOT NULL,
    plateName           Nom             NOT NULL,
    plateDescription    VARCHAR(255)    NOT NULL,
    platImage           BYTEA           NOT NULL,
    platPrice           INT             NOT NULL,
    CONSTRAINT          plat_cc0        PRIMARY KEY (plateId)
);

CREATE TABLE Menu
(
    menuId      IdMenu      NOT NULL,
    menuDate    DATE        NOT NULL,
    CONSTRAINT  menu_cc0    PRIMARY KEY (menuId)
);

CREATE TABLE MenuPlat
(
    menuId      IdMenu          NOT NULL,
    plateId     IdPlate         NOT NULL,
    CONSTRAINT  menuplat_cc0    PRIMARY KEY (menuId, plateId),
    CONSTRAINT  menuplat_cc1    FOREIGN KEY (menuId)    REFERENCES menu,
    CONSTRAINT  menuplat_cc2    FOREIGN KEY (plateId)   REFERENCES plat
);

CREATE TABLE Promotion
(
    promotionId     IdPromo     NOT NULL,
    promotionStart  DATE        NOT NULL,
    promotionEnd    DATE        NOT NULL,
    promotionRate   promRate    NOT NULL,
    CONSTRAINT      promo_cc0   PRIMARY KEY (promotionId)
);

CREATE TABLE PromoPlat
(
    promotionId     IdPromo         NOT NULL,
    plateId         IdPlate         NOT NULL,
    CONSTRAINT      promoplat_cc0   PRIMARY KEY (promotionId, plateId),
    CONSTRAINT      promoplat_cc1   FOREIGN KEY (promotionId) REFERENCES promotion,
    CONSTRAINT      promoplat_cc2   FOREIGN KEY (plateId)     REFERENCES Plat
);

CREATE TABlE Commande
(
    commandeId      IdCommande      NOT NULL,
    clientId        IdClient        NOT NULL,
    commandeTotal   INT             NOT NULL,
    commandePoints  INT             NOT NULL,
    commandeDate    DATE            NOT NULL,
    commandeConfirm BOOLEAN         NOT NULL,
    CONSTRAINT      commande_cc0    PRIMARY KEY (commandeId),
    CONSTRAINT      commande_cc1    FOREIGN KEY (clientId) REFERENCES Client
);

CREATE TABLE CommandePlat
(
    commandeId      IdCommande      NOT NULL,
    plateId         IdPlate         NOT NULL,
    CONSTRAINT      commplat_cc0    PRIMARY KEY (commandeId,plateId),
    CONSTRAINT      commplat_cc1    FOREIGN KEY (commandeId) REFERENCES Commande,
    CONSTRAINT      commplat_cc2    FOREIGN KEY (plateId) REFERENCES Plat
);

CREATE TABLE Parrain
(
    parrainId       IdClient        NOT NULL,
    parrainCode     VARCHAR         NOT NULL,
    CONSTRAINT      parrain_cc0     PRIMARY KEY (parrainId),
    CONSTRAINT      parrain_cc1     FOREIGN KEY (parrainId) REFERENCES Client (clientId)
);

CREATE TABLE Filleul
(
    filleulId       IdClient        NOT NULL,
    parrainId       IdClient        NOT NULL,
    CONSTRAINT      filleul_cc0     PRIMARY KEY (filleulId),
    CONSTRAINT      filleul_cc1     FOREIGN KEY (parrainId) REFERENCES Parrain
);

CREATE TABLE Evenements
(
    eventId             IdEvent     NOT NULL,
    eventName           Nom         NOT NULL,
    eventDescription    VARCHAR     NOT NULL,
    eventDate           DATE        NOT NULL,
    eventImage          bytea       NOT NULL, /*add it to functions*/
    CONSTRAINT          event_cc0   PRIMARY KEY (EventId)
);

CREATE TABLE Reclamation
(
    reclamationId           IdRec       NOT NULL,
    commandeId              IdCommande  NOT NULL,
    reclamationDate         DATE        NOT NULL,
    reclamationDescription  VARCHAR     NOT NULL,
    CONSTRAINT              rec_cc0     PRIMARY KEY (reclamationId),
    CONSTRAINT              rec_cc1     FOREIGN KEY (commandeId) REFERENCES Commande
);

CREATE TABLE ReclamationResp
(
    responseId       IdResp      NOT NULL,
    reclamationId    IdRec       NOT NULL,
    response         VARCHAR     NOT NULL,
    responseValid    BOOLEAN     NOT NULL,
    CONSTRAINT      resp_cc0    PRIMARY KEY (responseId),
    CONSTRAINT      resp_cc1    FOREIGN KEY (reclamationId) REFERENCES Reclamation
);

CREATE TABLE Parametre
(
    settingId       IdSetting       NOT NULL,
    adminId         IdAdmin         NOT NULL,
    hoursOpen       VARCHAR         NOT NULL,
    hoursClosed     VARCHAR         NOT NULL,
    politique       VARCHAR         NOT NULL,
    conversionRate  FLOAT           NOT NULL,
    CONSTRAINT      parametre_cc0   PRIMARY KEY (settingId),
    CONSTRAINT      parametre_cc1   FOREIGN KEY (adminId) REFERENCES Admin
);

-- =========================================================================== Y
/*

/*
-- =========================================================================== Z
Contributeurs :
  (EL) franck.engolo@2028.ucac-icam.com

Adresse, droits d’auteur et copyright :
  Département d’informatique
  Université UCAC-ICAM
  Yansoki (Yassa)
  Douala

  [CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0)]

Tâches projetées :
  ajouter tables
    menu-plat
    promotion-plat
    client-jeu
    commande-plate

 */

Tâches réalisées :
Création des tables et domaines

Références :

-- -----------------------------------------------------------------------------
-- fin de sql_cre.sql
-- =========================================================================== Z
*/







