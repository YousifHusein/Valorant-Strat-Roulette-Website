const strategies = [
    {
        text: "Knives only! No guns.",
        difficulty: 1,
        category: "Fun",
        description: "This strategy focuses on pure melee combat. All players must only use knives, with no guns allowed.",
        weaponRecommendations: "Knives only.",
        roles: "All players play aggressively and close the distance to fight with knives.",
        tips: "Try to stay close to the enemy team to land your knife hits.",
        counter: "This strategy can be countered by long-range weapons like rifles and snipers."
    },
    {
        text: "Everyone buys a Sheriff and walks everywhere.",
        difficulty: 2,
        category: "Challenge",
        description: "In this strategy, all players buy a Sheriff pistol and take slow, deliberate steps, trying to get headshots.",
        weaponRecommendations: "Sheriff pistol only.",
        roles: "Everyone must stick together and engage with stealth.",
        tips: "Aim for the head! The Sheriff has a lot of one-shot kill potential when used correctly.",
        counter: "This strategy is vulnerable to fast rushes and players with full rifles."
    },
    {
        text: "One player leads, others follow no questions asked.",
        difficulty: 3,
        category: "Tactical",
        description: "This strategy involves one designated player leading the group and making all decisions, while the others follow without hesitation.",
        weaponRecommendations: "Use rifles like the Phantom or Vandal for flexibility.",
        roles: "One leader calls the shots, the rest of the team follows and adapts.",
        tips: "Trust your leader! If you have any doubts, just follow and trust the process.",
        counter: "A lack of individual decision-making can leave the team open to ambushes or mistakes."
    },
    {
        text: "No abilities, only gunplay.",
        difficulty: 3,
        category: "Challenge",
        description: "This strategy focuses solely on gunplay, without using any abilities. Players must rely purely on their aim and reflexes.",
        weaponRecommendations: "Use rifles or SMGs, depending on your playstyle.",
        roles: "All players must adapt to their role without relying on abilities.",
        tips: "Play carefully and focus on aiming and movement. Abilities are not allowed!",
        counter: "Abilities like flashes and smokes can be used to disorient players who rely on gunplay only."
    },
    {
        text: "Everyone rushes mid, no stopping.",
        difficulty: 2,
        category: "Tactical",
        description: "This strategy involves all players rushing the middle lane (mid) and not stopping to engage the enemy. It requires speed and coordination.",
        weaponRecommendations: "Use rifles or SMGs for fast movement and quick engagements.",
        roles: "Everyone pushes as a team, using the element of surprise to overwhelm the enemy.",
        tips: "Do not stop! Keep moving and overwhelm the enemy with sheer numbers.",
        counter: "This strategy can be countered by holding angles and using smokes or flashes to slow down the rush."
    },
    {
        text: "All players buy a Phantom and rush B site.",
        difficulty: 4,
        category: "Tactical",
        description: "In this strategy, all players buy a Phantom and rush B site together, quickly overwhelming the defenders with firepower.",
        weaponRecommendations: "Phantom rifles for fast sprays and mobility.",
        roles: "All players rush together and use their rifles to overwhelm B site defenders.",
        tips: "Coordinate your rush, but don’t wait for anyone—act quickly and decisively.",
        counter: "Defenders can use flashes, molotovs, or a well-placed tripwire to disrupt the rush."
    },
    {
        text: "Everyone buys an Ares and holds angles.",
        difficulty: 4,
        category: "Tactical",
        description: "This strategy involves everyone buying an Ares and holding defensive positions. The goal is to suppress the enemy with the Ares' fast rate of fire.",
        weaponRecommendations: "Ares for fast spraying and holding angles.",
        roles: "Players should be positioned to hold defensive lines and use their firepower to prevent enemy advances.",
        tips: "Positioning is key—ensure each angle is covered to maximize firepower.",
        counter: "This strategy is vulnerable to grenades, smokes, and fast rotations to different bomb sites."
    },
    {
        text: "One player goes for a lurk, others rush A site.",
        difficulty: 5,
        category: "Tactical",
        description: "This strategy involves one player going for a lurk (a sneaky flanking route) while the others rush the A site, distracting the defenders and drawing attention.",
        weaponRecommendations: "Lurker uses a silenced weapon or pistol, others use rifles like Vandal or Phantom.",
        roles: "One player lurks while the others rush A, creating chaos and confusion.",
        tips: "The lurker must stay quiet and wait for the perfect opportunity to strike from behind.",
        counter: "The lurker can be easily detected if not careful. The enemy can also predict the rush if the timing isn’t right."
    },
    {
        text: "No communication, everyone plays as they wish.",
        difficulty: 1,
        category: "Fun",
        description: "This strategy is for fun, where no communication is allowed, and every player makes their own decisions independently.",
        weaponRecommendations: "Any weapon can be used, as each player is free to make their own choices.",
        roles: "Everyone is on their own, with no coordination required.",
        tips: "Don't worry about the outcome, just have fun and embrace the chaos.",
        counter: "This strategy can be easily countered by a coordinated enemy team."
    },
    {
        text: "All players buy Classic and rush mid.",
        difficulty: 3,
        category: "Fun",
        description: "In this strategy, all players buy a Classic pistol and rush mid together, focusing on close-range engagements.",
        weaponRecommendations: "Classic pistol only.",
        roles: "Everyone rushes mid with the Classic, using quick reflexes and surprise to catch the enemy off-guard.",
        tips: "Stay close to each other to maximize the impact of your pistols.",
        counter: "Defenders with rifles or shotguns will have a huge advantage in longer-range encounters."
    }
];

$(document).ready(function () {
    const stratList = $('#strat-list');

    strategies.forEach(strat => {
        const listItem = `<li title="${strat.text}">${strat.text}</li>`;
        stratList.append(listItem);
    });

    $('#strat-list li').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-light'
    });

    $('#strat-accordion li').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-light'
    });

    $("#strat-accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });

    $('#difficulty-slider').on('input', function () {
        const difficulty = $(this).val();
        $('#difficulty-value').text(difficulty);
    });

    $('#generate-strat').on('click', function () {
        let difficulty = $('#difficulty-slider').val();
        $('#difficulty-value').text(difficulty);

        const filteredStrategies = strategies.filter(strat => strat.difficulty == difficulty);

        const randomStrat = filteredStrategies[Math.floor(Math.random() * filteredStrategies.length)];
        
        $('#strat-display').text(randomStrat.text);

        $('#strat-display').on('click', function () {
            const modalContent = `
                <strong>Strategy:</strong> ${randomStrat.text}<br><br>
                <strong>Difficulty:</strong> ${randomStrat.difficulty}<br>
                <strong>Category:</strong> ${randomStrat.category}<br><br>
                <strong>Description:</strong> ${randomStrat.description}<br><br>
                <strong>Weapon Recommendations:</strong> ${randomStrat.weaponRecommendations}<br><br>
                <strong>Roles:</strong> ${randomStrat.roles}<br><br>
                <strong>Tips for Success:</strong> ${randomStrat.tips}<br><br>
                <strong>Counter Strategies:</strong> ${randomStrat.counter}
            `;
            
            $('#modal-content').html(modalContent);
            
            $('#strategy-modal').fadeIn();
        });
    });

    $('.close-btn').on('click', function () {
        $('#strategy-modal').fadeOut();
    });

    $(window).on('click', function (event) {
        if ($(event.target).is('#strategy-modal')) {
            $('#strategy-modal').fadeOut();
        }
    });

    $('#color-picker').on('input', function () {
        const color = $(this).val();
        $('body').css('background-color', color);
    });
});
