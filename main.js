const Greeter = function(){

    let generated_greetings = '';
    const adjectives = [

        // Caractère / Psychologie
        '%s abordables',
        'admirables %s',
        'adorables %s',
        '%s agréables',
        {'m': '%s animés','f': '%s animées'},
        '%s attrayant_e_s',
        {'m': 'beaux %s', 'f': 'belles %s'},
        'bon_ne_s %s',
        '%s brillant_e_s',
        '%s célestes',
        '%s charmant_e_s',
        '%s confiant_e_s',
        {'m': '%s constants','f' : '%s constantes'},
        {'m': '%s convaincants','f' : '%s convaincantes'},
        '%s convenables',
        {'m': '%s coquets','f' : '%s coquettes'},
        {'m': '%s costauds','f' : '%s costaudes'},
        '%s délicat_e_s',
        '%s distingué_e_s',
        {'m': '%s doux','f' : '%s douces'},
        '%s droit_e_s',
        '%s dynamiques',
        '%s éblouissant_e_s',
        '%s éclatant_e_s',
        '%s élégant_e_s',
        'gentil_le_s %s',
        'grand_e_s %s',
        '%s joli_e_s',
        '%s joviaux',
        '%s magnifiques',
        {'m':'%s merveilleux', 'f':'%s merveilleuses'},
        '%s mignon_e_s',
        '%s minces',
        '%s parfait_e_s',
        '%s plaisant_e_s',
        '%s propres',
        '%s ravissant_e_s',
        '%s réfléchi_e_s',
        '%s séduisant_e_s',
        '%s simples',
        '%s solides',
        {'m':'%s somptueux', 'f':'%s somptueuses'},
        '%s souriant_e_s',
        '%s splendides',
        'sublimes %s',
        '%s superbes',
        '%s accessibles',
        {'m':'%s actifs', 'f':'%s actives'},
        {'m':'%s massifs', 'f':'%s massives'},
        '%s admirables',
        '%s adroit_e_s',
        '%s affables',
        {'m':'%s ambitieux', 'f':'%s ambitieuses'},
        '%s amusé_e_s',
        '%s apaisant_e_s',
        '%s appliqué_e_s',
        '%s ardent_e_s',
        '%s artistiques',
        '%s assidu_e_s',
        '%s attentif_e_s',
        {'m':'%s audacieux', 'f':'%s audacieuses'},
        '%s authentiques',
        '%s autonomes',
        '%s autoritaires',
        '%s avenant_e_s',
        {'m':'%s aventureux', 'f':'%s aventureuses'},
        '%s badin_e_s',
        '%s bavard_e_s',
        '%s béni_e_s',
        '%s bienfaisant_e_s',
        '%s bienveillant_e_s',
        'braves %s',
        '%s brillant_e_s',
        '%s calmes',
        '%s capables',
        '%s captivant_e_s',
        {'m':'%s chaleureux', 'f':'%s chaleureuses'},
        {'m':'%s chanceux', 'f':'%s chanceuses'},
        '%s charismatiques',
        {'m':'%s charmeurs', 'f':'%s charmeuses'},
        '%s chevaleresques',
        '%s clément_e_s',
        '%s cohérent_e_s',
        {'m':'%s combatifs', 'f':'%s combatives'},
        '%s comiques',
        '%s cosmiques',
        '%s stellaires',
        {'m':'%s communicatifs', 'f':'%s communicatives'},
        '%s compétent_e_s',
        '%s complaisant_e_s',
        '%s complémentaires',
        '%s complices',
        {'m':'%s compréhensifs', 'f': '%s compréhensives'},
        '%s concentré_e_s',
        '%s conciliant_e_s',
        {'m':'%s consciencieux', 'f':'%s consciencieuses'},
        '%s content_e_s',
        {'m':'%s conviviaux', 'f':'%s conviviales'},
        {'m':'%s coopératifs', 'f':'%s coopératives'},
        {'m':'%s courageux', 'f':'%s courageuses'},
        '%s courtoi_se_s',
        {'m':'%s créatifs','f':'%s créatives'},
        '%s cultivé_e_s',
        {'m':'%s curieux','f':'%s curieuses'},
        '%s débrouillard_e_s',
        '%s décidé_e_s',
        '%s décontracté_e_s',
        '%s détendu_e_s',
        '%s tendu_e_s',
        '%s déterminé_e_s',
        '%s dévoué_e_s',
        '%s dignes',
        '%s diplomates',
        '%s discipliné_e_s',
        '%s discret_e_s',
        '%s disponibles',
        '%s drôles',
        '%s économes',
        '%s éloquent_e_s',
        '%s endurant_e_s',
        '%s énergiques',
        '%s engagé_e_s',
        '%s enthousiastes',
        '%s entreprenant_e_s',
        '%s épanoui_e_s',
        '%s épatant_e_s',
        '%s euphoriques',
        '%s excellent_e_s',
        '%s exceptionnel_le_s',
        '%s excité_e_s',
        '%s exemplaires',
        {'m':'%s festifs', 'f':'%s festives'},
        '%s fiables',
        '%s fidèles',
        '%s formidables',
        '%s galant_e_s',
        {'m':'%s flatteurs', 'f':'%s flatteuses'},
        '%s gentil_le_s',
        '%s habiles',
        '%s franc_he_s',
        {'m':'%s fiers', 'f':'%s fières'},
        {'m':'%s généreux', 'f':'%s généreuses'},
        {'m':'%s harmonieux', 'f':'%s harmonieuses'},
        '%s hésitant_e_s',
        '%s honnêtes',
        '%s humbles',
        {'m':'%s imaginatifs', 'f':'%s imaginatives'},
        {'m':'%s impartiaux', 'f':'%s impartiales'},
        '%s impertinent_e_s',
        '%s imperturbables',
        '%s impliqué_e_s',
        '%s impressionnant_e_s',
        '%s indulgent_e_s',
        '%s infatigables',
        '%s fatigué_e_s',
        '%s influent_e_s',
        {'m':'%s ingénieux', 'f':'%s ingénieuses'},
        {'m':'%s inoffensifs', 'f':'%s inoffensives'},
        '%s intègres',
        '%s intelligent_e_s',
        '%s intéressant_e_s',
        '%s intrépides',
        '%s irréprochables',
        {'m':'%s judicieux', 'f':'%s judicieuses'},
        '%s époustouflant_e_s',
        '%s justes',
        '%s logiques',
        {'m':'%s loyaux', 'f':'%s loyales'},
        '%s lucides',
        '%s magnanimes',
        '%s malin_e_s',
        '%s matures',
        '%s méritant_e_s',
        '%s méthodiques',
        {'m':'%s méticuleux', 'f':'%s méticuleuses'},
        {'m':'%s minutieux', 'f':'%s minutieuses'},
        '%s modestes',
        '%s motivé_e_s',
        '%s naturel_le_s',
        '%s optimistes',
        '%s ordonné_e_s',
        '%s organisé_e_s',
        {'m':'%s originaux', 'f':'%s originales'},
        '%s ouvert_e_s d’esprit',
        '%s pacifiques',
        '%s passionnant_e_s',
        '%s passionné_e_s',
        '%s patient_e_s',
        '%s patriotes',
        '%s persévérant_e_s',
        '%s perspicaces',
        {'m':'%s persuasifs', 'f':'%s persuasives'},
        '%s pétillant_e_s',
        {'m':'%s phénoménaux', 'f':'%s phénoménales'},
        '%s philosophes',
        '%s placides',
        '%s plaisant_e_s',
        '%s poli_e_s',
        '%s polyvalent_e_s',
        '%s ponctuel_le_s',
        '%s posé_e_s',
        {'m':'%s positifs', 'f':'%s positives'},
        '%s pragmatiques',
        '%s précis_es_',
        '%s prévenant_e_s',
        '%s prévoyant_e_s',
        {'m':'%s prodigieux', 'f':'%s prodigieuses'},
        {'m':'%s productifs', 'f':'%s productives'},
        {'m':'%s prometteurs', 'f':'%s prometteuses'},
        {'m':'%s protecteurs', 'f':'%s protectrices'},
        '%s prudent_e_s',
        '%s pugnaces',
        '%s raisonnables',
        '%s rassurant_e_s',
        '%s rationnel_le_s',
        '%s ravi_e_s',
        '%s réalistes',
        {'m':'%s réceptifs', 'f':'%s réceptives'},
        '%s reconnaissant_e_s',
        {'m':'%s respectueux', 'f':'%s respectueuses'},
        '%s responsables',
        {'m':'%s rigoureux', 'f':'%s rigoureuses'},
        '%s rusé_e_s',
        '%s sages',
        '%s serein_e_s',
        {'m':'%s sérieux', 'f':'%s sérieuses'},
        '%s serviables',
        '%s sincères',
        '%s sociables',
        {'m':'%s sociaux', 'f':'%s sociales'},
        {'m':'%s soigneux', 'f':'%s soigneuses'},
        '%s spirituel_le_s',
        {'m':'%s sportifs', 'f':'%s sportives'},
        '%s stratèges',
        {'m':'%s studieux', 'f':'%s studieuses'},
        '%s sympathiques',
        {'m':'%s talentueux', 'f':'%s talentueuses'},
        '%s tenaces',
        '%s tolérant_e_s',
        {'m':'%s travailleurs', 'f':'%s travailleuses'},
        '%s vaillant_e_s',
        '%s vigilant_e_s',
        {'m':'%s vigoureux', 'f':'%s vigoureuses'},
        '%s volubiles',
        '%s vulgaires',
        '%s zens',
        '%s timides',
        {'m':'%s vifs', 'f':'%s vives'},
        {'m':'%s affectueux', 'f':'%s affectueuses'},
        '%s aimant_e_s',
        '%s aimé_e_s',
        {'m':'%s amoureux', 'f':'%s amoureuses'},
        '%s attachant_e_s',
        '%s attentionné_e_s',
        '%s câlin_e_s',
        '%s calmes',
        '%s émouvant_e_s',
        '%s empathiques',
        {'m':'%s enchanteurs', 'f':'%s enchanteuses'},
        '%s extatiques',
        {'m':'fiers %s', 'f':'fières %s'},
        {'m':'%s heureux', 'f':'%s heureuses'},
        {'m':'%s joyeux', 'f':'%s joyeuses'},
        '%s passionné_e_s',
        {'m':'%s sûrs d\'eux', 'f':'%s sûres d\'elles'},
        '%s troublé_e_s',
        '%s wokes',
        '%s épatatant_e_s',
        '%s impromptu_e_s',
        '%s incongru_e_s',
        '%s gourmand_e_s',
        {'m':'%s blagueurs', 'f':'%s blagueuses'},
        '%s amorphes',
        '%s blasé_e_s',
        {'m':'%s crasseux', 'f':'%s crasseuses'},
        '%s choqué_e_s',
        '%s coupables',
        '%s dégoûté_e_s',
        '%s déprimé_e_s',
        '%s dérangé_e_s',
        '%s dégueulasses',
        '%s désinvoltes',
        '%s ébouriffé_e_s',
        '%s ébouriffant_e_s',
        '%s fades',
        '%s frustré_e_s',
        '%s gêné_e_s',
        '%s gênant_e_s',
        {'m':'%s hideux', 'f':'%s hideuses'},
        '%s horribles',
        '%s maigres',
        {'m':'%s mous', 'f':'%s moles'},
        '%s narcissiques',
        '%s nonchalant_e_s',
        '%s sales',
        '%s sauvages',
        '%s superficiel_le_s',
        '%s ternes',
        'vilain_e_s %s',
        '%s vulgaires',
        '%s sévères',
        '%s sincères',
        '%s snobs',
        '%s aigri_e_s',
        '%s aimables',
        '%s arrivistes',
        '%s arrogant_e_s',
        '%s associables',
        '%s autoritaires',
        '%s avares',
        '%s avides',
        '%s bavard_e_s',
        '%s borné_e_s',
        '%s bourru_e_s',
        '%s cachottier_e_s',
        '%s caractériel_le_s',
        '%s carriéristes',
        '%s caustiques',
        '%s colériques',
        '%s condescendant_e_s',
        '%s conformistes',
        '%s coquin_e_s',
        '%s crédules',
        '%s cyniques',
        '%s débiles',
        '%s défaitistes',
        '%s dépensier_e_s',
        '%s désagréables',
        '%s désobéissant_e_s',
        '%s désordonné_e_s',
        '%s désorganisé_e_s',
        '%s égocentriques',
        '%s égoïstes',
        '%s énigmatiques',
        '%s ennuyant_e_s',
        '%s entêté_e_s',
        '%s étourdi_e_s',
        '%s excentriques',
        '%s extraverti_e_s',
        '%s fainéant_e_s',
        '%s fantasques',
        '%s farfelu_e_s',
        '%s fatalistes',
        '%s fatigant_e_s',
        '%s fourbes',
        '%s grossier_e_s',
        '%s hypocrites',
        '%s hystériques',
        '%s idéalistes',
        '%s immatures',
        '%s impatient_e_s',
        '%s imprudent_e_s',
        '%s incompétent_e_s',
        '%s incultes',
        '%s indiscret_e_s',
        '%s individualistes',
        '%s influençables',
        '%s intolérant_e_s',
        '%s introverti_e_s',
        '%s irresponsables',
        '%s lâches',
        '%s laxistes',
        '%s lent_e_s',
        '%s lunatiques',
        '%s maladroit_e_s',
        '%s malhonnêtes',
        '%s maniaques',
        '%s maniéré_e_s',
        '%s méchant_e_s',
        '%s médisant_e_s',
        '%s méfiant_e_s',
        '%s mégalomanes',
        '%s méprisant_e_s',
        '%s mythomanes',
        '%s obstiné_e_s',
        '%s pédant_e_s',
        '%s perfectionnistes',
        '%s pervers_es_',
        '%s poli_e_s',
        '%s prudent_e_s',
        '%s puéril_le_s',
        '%s radin_e_s',
        {'m':'%s rancuniers','f':'%s rancunières'},
        '%s rebelles',
        '%s renfermé_e_s',
        '%s réservé_e_s',
        '%s ringard_e_s',
        '%s mystiques',
        '%s irréductibles',
        {'m':'%s agressifs', 'f':'%s agressives'},
        {'m':'%s asociaux', 'f':'%s asociales'},
        {'m':'%s bagarreurs', 'f':'%s bagarreuses'},
        {'m':'%s baratineurs', 'f':'%s baratineuses'},
        {'m':'%s boudeurs', 'f':'%s boudeuses'},
        {'m':'%s capricieux', 'f':'%s capricieuses'},
        {'m':'%s coléreux', 'f':'%s coléreuses'},
        {'m':'%s dragueurs', 'f':'%s dragueuses'},
        {'m':'%s envieux', 'f':'%s envieuses'},
        {'m':'%s hyperactifs', 'f':'%s hyperactives'},
        {'m':'%s impulsifs', 'f':'%s impulsives'},
        {'m':'%s irrespectueux', 'f':'%s irrespectueuses'},
        {'m':'%s joueurs', 'f':'%s joueuses'},
        {'m':'%s misogynes', 'f':'%s misandres'},
        {'m':'%s malicieux', 'f':'%s malicieux'},
        {'m':'%s manipulateurs', 'f':'%s manipulatrices'},
        {'m':'%s menteurs', 'f':'%s menteuses'},
        {'m':'%s moqueur', 'f':'%s moqueuses'},
        {'m':'%s mystérieux', 'f':'%s mystérieuses'},
        {'m':'%s naïfs', 'f':'%s naïves'},
        {'m':'%s possessifs', 'f':'%s possessives'},
        {'m':'%s prétentieux', 'f':'%s prétentieuses'},
        {'m':'%s procrastinateurs', 'f':'%s procrastinateuses'},
        {'m':'%s provocateurs', 'f':'%s provocatrices'},
        {'m':'%s râleurs', 'f':'%s râleuses'},
        {'m':'%s rêveurs', 'f':'%s rêveuses'},
        {'m':'%s rieurs', 'f':'%s rieuses'},
        {'m':'%s séducteurs', 'f':'%s séductrices'},
        {'m':'%s vaniteux', 'f':'%s vaniteuses'},
        '%s encapuchoné_e_s',
        '%s interconnecté_e_s',
        '%s éveillé_e_s',
        '%s awares',
        '%s matrixé_e_s',
        '%s à deux doigts de péter un câble',
        '%s nobles d\'âme',
        '%s matérialistes',
        '%s perceptifs',
        '%s mentalistes',
        '%s illusionistes',
        '%s marionnettistes',
        '%s magiques',
        '%s banal_e_s',
        '%s noctambules',
        '%s diurnes',
        '%s nictalopes',
        
        // Géographie
        '%s breton_ne_s',
        '%s des Outre-mers',
        '%s expatrié_e_s',
        '%s zadistes',
        '%s sudistes',
        '%s Suisse-Allemands',
        '%s armoricain_e_s',

        // Médecine
        `%s appendiculaires`,
        {'m':'%s cérébraux', 'f':'%s cérébrales'},
        '%s fongiques',
        '%s capillaires',
        '%s claviculaires',
        {'m':'%s convulsifs', 'f':'%s convulsives'},
        '%s infantiles',
        '%s gastriques',
        {'m':'%s gingivaux', 'f':'%s gingivales'},
        '%s névrotiques',
        '%s auriculaires',
        '%s ourlien_ne_s',
        {'m':'%s subunguéaux','f':'subunguéales'}, // sous les ongles
        '%s cutané_e_s',
        '%s palpébral_e_s',
        {'m':'%s pileux', 'f':'%s pileuses'},
        '%s psychotiques',
        '%s spléniques',
        {'m':'%s rénaux', 'f':'%s rénales'},
        {'m':'%s septaux', 'f':'%s septales'},
        {'m':'%s prandiaux', 'f':'%s prandiales'},
        '%s vésiculaires',
        '%s ventriloques',
        '%s flatulent_e_s',

        // Dimensions
        '%s titanesques',
        '%s microscopiques',
        '%s nanoscopiques',
        '%s gigantesques',

        // Apparence
        '%s barbu_e_s',
        '%s moustachu_e_s',
        '%s imberbes',
        '%s chevelu_e_s',
        '%s échevelé_e_s',
        '%s coloré_e_s',
        '%s en nuance de gris',
        '%s RGB',
        
        // Physique / Chimie
        '%s non-newtonnien_ne_s',
        '%s asymptotiques',
        '%s électromagnétiques',
        '%s supersoniques',
        '%s supraluminiques',
        '%s quantiques',
        '%s de Schrödinger',
        '%s superposé_e_s',
        '%s intriqué_e_s',
        '%s analogiques',
        '%s numériques',
        '%s supramoléculaires',
        '%s équitables',
        '%s stratosphériques',
        '%s photoélectriques',
        '%s atomiques',
        '%s corpusculaires',
        '%s probabilistes',
        '%s conceptuel_le_s',
        '%s ionisé_e_s',
        '%s galactiques',
        '%s invisibles',
        '%s inextricables',
        '%s déstructuré_e_s',
        '%s rectilignes',
        '%s lyophilisé_e_s',
        '%s déshydraté_e_s',
        '%s autoalimenté_e_s',
        '%s en énergie libre',
        '%s qui échappent aux lois de la physique',
        '%s pataphysiques',
        
        // Société
        '%s sourcé_e_s en circuit-court-han',
        '%s coupé_e_s décalé_e_s',
        '%s qui sachent',
        '%s complotistes',
        '%s reptilien_ne_s',
        '%s croustillant_e_s',
        {'m':'%s ferrugineux', 'f':'%s ferrugineuses'},
        '%s mécatroniques',
        '%s ninjas',
        '%s open-source',
        '%s éco-conçu_e_s',
        '%s écolo-bobo',
        '%s adeptes du grand Capital',
        '%s décroissant_e_s',
        '%s de gauche',
        '%s de droite',
        '%s abstentionnistes',
        {'m':'%s partisans, ouvriers et paysans', 'f': '%s partisanes, ouvrières et paysannes'},
        {'m':'%s antisociaux qui perdent leur sang froid', 'f':'%s antisociales qui perdent leur sang froid'},
        '%s de l\'Armée Rouge',
        '%s recyclables',
        '%s recyclé_e_s',
        '%s des bois',
        '%s arboricoles',
        '%s déconstruit_e_s',
        '%s surnaturel_le_s',
        
        // Menuiserie / Lutherie / Bois / Bricolage
        '%s xylophages',
        '%s fretless',
        '%s égrainé_e_s au 2000',
        '%s poncé_e_s',
        '%s rabotté_e_s',
        '%s verni_e_s',
        '%s collé_e_s à la cyano',
        '%s affûté_e_s',
        {'m':'%s multi-tonaux', 'f':'%s multi-tonales'},
        '%s doré_e_s finement',
        '%s sculpté_e_s à la main',
        
        // Matériaux
        '%s en résine',
        '%s métalliques',
        '%s chromé_e_s',
        '%s plaqué_e_s or',
        '%s en titane de carbone',
        '%s en adamantium',
        '%s en plastoc',
        '%s iridescents',
        '%s en nacre',
        '%s arboricoles',
        
        // Astrologie
        '%s né_e_s en Bélier',
        '%s né_e_s en Taureau',
        '%s né_e_s en Gémeaux',
        '%s né_e_s en Cancer',
        '%s né_e_s en Lion',
        '%s né_e_s en Vierges',
        '%s né_e_s en Balance',
        '%s né_e_s en Scorpion',
        '%s né_e_s en Sagittaire',
        '%s né_e_s en Capricorne',
        '%s né_e_s en Verseau',
        '%s né_e_s en Poisson',
        '%s ascendant_e_s Bélier',
        '%s ascendant_e_s Taureau',
        '%s ascendant_e_s Gémeaux',
        '%s ascendant_e_s Cancer',
        '%s ascendant_e_s Lion',
        '%s ascendant_e_s Vierges',
        '%s ascendant_e_s Balance',
        '%s ascendant_e_s Scorpion',
        '%s ascendant_e_s Sagittaire',
        '%s ascendant_e_s Capricorne',
        '%s ascendant_e_s Verseau',
        '%s ascendant_e_s Poisson',
        
        // Cuisine / Nourriture
        '%s au piment d\'Espelette',
        '%s carbonara',
        'tagines de %s',
        '%s aux p\'tit salé',
        '%s à la mode de Caen',
        '%s frit_e_s',
        '%s pané_e_s',
        '%s farci_e_s',
        'sushis de %s',
        'accras de %s',
        'cheesecakes de %s',
        'galettes de %s',
        '%s béchamel',
        '%s saisi_e_s à la plancha',
        '%s cuit_e_s au feu de bois',
        'succulents kebabs "salade - Tomates - %s"',
        '%s au beurre',
        '%s au saindoux',
        '%s à l\'huile d\'olive',
        'pesto de %s',
        '%s qui restent coincé_e_s entre les dents',
        '%s qui coupent les spaghetthi avant de les faire cuire',
        '%s pas trop cuit_e_s',
        '%s comestibles',
        '%s fondant_e_s à l\'intérieur',
        '%s base crème',
        '%s base tomate',
        '%s au miel',
        '%s avec supplément bacon',
        '%s torréfié_e_s',
        '%s malté_e_s',
        '%s zytophiles',
        '%s avarié_e_s',
        
        // Cinématographie
        {'m':'%s supercalifragilisticexpialidocieux', 'f':'%s supercalifragilisticexpialidocieuses'},
        '%s qui croisent les effluves',
        '%s qui ne croisent pas les effluves',
        '%s au shaker, pas à la cuillère',
        '%s limite nervous breakdown',
        '%s éparpillé_e_s façon puzzle',
        
        // Pop-Culture
        '%s qui ont eu leur prénom dans le générique du Club Dorothée',
        'Hokuto no %s',
        '%s attachiant_e_s',
        '%s précis_es_ pointu_e_s comme les mouettes',
        '%s en Odorama',
        '%s enregistré_e_s sur VHS',
        
        // Musique
        '%s tombé_e_s du ciel et dont les étoiles entre-elles ne font que parler',
        '%s à qui on a mis la fièvre pendant des heures',
        '%s trombonistes',
        '%s bassistes',
        '%s guitaristes',
        {'m':'%s batteurs','f':'%s batteuses'},
        '%s claviéristes',
        '%s xylophonistes',
        '%s chanteurs',
        '%s choristes',
        '%s désaccordé_e_s',
        '%s en ré-mineur',
        '%s en fa-dièse',
        '%s chanteurs de K-pop',
        '%s métalleux',
        '%s punks',
        '%s grégorien_ne_s',
        '%s qui pogotent dans la fosse',

        // Fans des artistes réguliers des playlists de Woody
        '%s fans de Freddo Mercure', // Freddy Mercury
        '%s fans de Jacques Blanc', // Jack White
        '%s fans de Jacques Noir', // Jack Black
        '%s fans de David Godasse', // Dave Grohl
        '%s fans de Michel fils de Jacques', // Michael Jackson
        '%s dédicacés par Josh Homme',
        
        // Propres à la chaîne WoodyLutherie ou Twitch
        '%s venu_e_s découvrir les meilleures playlist Spotify du Twitch Game',
        '%s qui ne connaissent pas encore Rush',
        '%s qui lâchent leur prime',
        '%s-sandwich de qualitay',
        '%s qui balancent des bons gros raids de 2000 personnes',
        '%s qui propulsent le hype train',
        '%s doté_e_s du pouvoir des étoiles', // Alerte sub
        '%s qui subbent',
        '%s abonné_e_s',
        '%s qui perdent leurs ciseaux',
        '%s rangé_e_s dans la cabane',
        '%s vêtu_e_s d\'un splendide tablier',
        '%s en text-to-speech germanique',
        
        // Expressions courantes
        '%s qui ont vu l\'homme qui a vu l’ours',
        '%s comme-ci-comme-ça',
        '%s épatatant_e_s',
        '%s épatatants',
        '%s à la one again',

        // Tenues vestimentaires
        '%s en débardeur',
        '%s vêtu_e_s de cuir',
        '%s en spandex',
        '%s en short',
        '%s en tongs',
        '%s en Dick Marton\'s',
        '%s en habits du dimanche',
        '%s ajusté_e_s près du corps',
        '%s en laine qui grattent ses morts',
        '%s taille basse',
        
        // Classement
        '%s S-tier',
        '%s A-tier',
        '%s B-tier',
        '%s C-tier',
        '%s OK-tier',
        '%s top of the pop',
        '%s number one',
        {'m': '%s premiers de la classe', 'f': '%s premières de la classe'},
        
        // Divers et inclassables
        '%s divers',
        '%s varié_e_s',
        'camarades %s ✊',
        '%s pirates',
        '%s en sueur',
        '%s bien rangé_e_s',
        '%s mal rangé_e_s',
        '%s addicts',
        '%s péremptoires',
        '%s perpendiculaires',
        '%s généré_e_s par ChatGPT',
        '%s random',
        '%s encore sous blister',
        '%s qui branchent leurs prises USB Type A dans le bon sens du premier coup',
        '%s qui dorment au fond de la salle à côté du radiateur',
        '%s dual-core',
        '%s sans fil',
        '%s full-HD',
        '%s 4K RTX',
        '%s cathodiques',
        '%s en Dolby surround',
        '%s multijoueurs',
        '%s virtuel_le_s',
        '%s en réalité augmentée',
        '%s collectors',
        '%s en édition limitée',
        '%s au taff',
        '%s en congés',
        '%s en vacances',
    ];
    
    const pick_adjective = (word, gender='m') =>
    {
        const adj = adjectives[Math.floor(Math.random()*adjectives.length)];
        
        if(typeof adj==='string'){
            return gender_swap(adj, gender).replace('%s', word);
        }else{
            return adj[gender].replace('%s', word);
        }
    }

    const gender_swap = (adj, gender) => {
        if(gender=='f'){
            return adj.replaceAll('_', '');
        }else{
            return adj.replaceAll(/_[^_]+_/g, '');
        }
    }

    const generate_greetings = () =>
    {
        return `Salut les ${pick_adjective('copeaux')}, les ${pick_adjective('échardes', 'f')} et les ${pick_adjective('sciures', 'f')}`
    }

    //Public "methods"
    this.refresh_greetings = function ()
    {
        generated_greetings = generate_greetings();
        document.getElementById("txt_greetings").innerText = generated_greetings;
    }

    this.copy_to_clipboard = () =>{
        navigator.clipboard.writeText(generated_greetings);
    }

    //Update the adjectives counter
    document.getElementById("txt_adjectives_counter").innerText = adjectives.length-1;
}

const greeter = new Greeter();

document.getElementById("btn_refresh").addEventListener("click", greeter.refresh_greetings);
document.getElementById("btn_copy").addEventListener("click", greeter.copy_to_clipboard);
greeter.refresh_greetings();
