import ActionCard from "./ActionCard";

function ActionCardContainer () {
    return(
        <>
            <div className="row row-cols-1 row-cols-md-2 mt-5 g-3">
                <ActionCard title="Gestion D'evenements" text="Tout le nécéssaire pour créer des évènements pour les clients" buttontext="Allez-y" display="w-50" Location="/EventMan"/>
                <ActionCard title="Gestion Promotion" text="Ajoutez des promotions temporaire pour booster les ventes !" buttontext="Let's Go" display="w-50" Location="/PromoTransition"/>
                <ActionCard title="Suivi Réclamations" text="Pour être sûr de ne jamais décevoir ces chères clients" buttontext="Let's Go" display="w-50" Location="/Table3"/>
                {/* <ActionCard title="Modifier les Paramètres" text="Heures D'ouverture, Politiques de confidentialité Le choix est a vous !" buttontext="Allons-y" display="w-50"/> */}
            </div>
        </>
    );
}

export default ActionCardContainer