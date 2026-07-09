# Aadishakti

Aadishakti is a browser-playable mythology progression prototype. The first build focuses on the core loop: choose an avatar path, fight a loka guardian, grow mastery, invoke astras, gather tapasya, reincarnate, and ascend through lokas.

## Current Prototype

- Avatar paths: Agni Initiate, Vajra Heir, Varuna Seeker, Rudra Shadow
- Progression: Bhuloka through Satyaloka
- Systems: karma, dharma, tapasya, shakti, avatar mastery, astra evolution
- Added systems: surge, boons, burdens, guardian traits, reincarnation cycles
- Element system: 12 mythology-rooted powers with fusion tiers
- Real-time combat: WASD/arrow movement, range checks, enemy projectiles, loka attack patterns
- Avatar unlock quests: each advanced avatar has lore and a specific awakening condition
- Astra mantra system: astras require the correct elemental fusion alignment before invocation
- Actions: Strike, Invoke Astra, Tapasya, Reincarnate
- Choices: Uphold Dharma, Claim Power, Offer Mercy, Reset Cycle
- Persistence: progress is saved in local storage
- Visuals: responsive UI with a live canvas arena

## Design Direction

The full game can grow into an action RPG where a mortal soul inherits divine, asuric, rakshasic, danavic, and rishi-linked avatar powers. Each avatar should have strengths, karmic burdens, astra compatibility, and unique progression. Powers and astras should evolve from simple mortal expressions into cosmic-scale forms.

## Controls

Move with WASD or arrow keys.
Strike with Space or the Strike button.
Invoke astra with F or the Invoke Astra button.
Use 1, 2, 3 for Strike, Astra, and Tapasya.

## Element Fusion Design

Base elements:
Agni, Jal, Prithvi, Vayu, Akash, Vidyut, Surya, Chandra, Kaal, Maya, Tamas, Shakti.

Two-element sequence matrix:
Agni combines with Jal = Tejas Rasa, Prithvi = Lava Garbha, Vayu = Dahana Vayu, Akash = Shabda Agni, Vidyut = Vidyut Agni, Surya = Surya Tejas, Chandra = Chandra Agni, Kaal = Kala Agni, Maya = Mayagni, Tamas = Dhumra Agni, Shakti = Shakti Jwala.
Jal combines with Prithvi = Vriddhi Tattva, Vayu = Megha Shakti, Akash = Nada Jala, Vidyut = Vajra Jala, Surya = Surya Jala, Chandra = Soma Rasa, Kaal = Kala Sindhu, Maya = Maya Jala, Tamas = Andha Jala, Shakti = Amrita Shakti.
Prithvi combines with Vayu = Giri Vayu, Akash = Garbha Akash, Vidyut = Ashani Prithvi, Surya = Hiranya Bhumi, Chandra = Soma Bhumi, Kaal = Shila Kaal, Maya = Maya Bhumi, Tamas = Andha Bhumi, Shakti = Kundalini Bhumi.
Vayu combines with Akash = Prana Akash, Vidyut = Vajra Vayu, Surya = Surya Vayu, Chandra = Chandra Vayu, Kaal = Kala Vayu, Maya = Maya Vayu, Tamas = Nisha Vayu, Shakti = Prana Shakti.
Akash combines with Vidyut = Vidyut Akash, Surya = Surya Akash, Chandra = Chandra Akash, Kaal = Kala Akash, Maya = Maya Akash, Tamas = Shunya Tamas, Shakti = Adi Spanda.
Vidyut combines with Surya = Aditya Vajra, Chandra = Soma Vajra, Kaal = Kala Vajra, Maya = Maya Vajra, Tamas = Krishna Vajra, Shakti = Chandika Vajra.
Surya combines with Chandra = Graha Jyoti, Kaal = Aditya Kaal, Maya = Maya Surya, Tamas = Grahan Tamas, Shakti = Aditya Shakti.
Chandra combines with Kaal = Chandra Kaal, Maya = Swapna Maya, Tamas = Nisha Soma, Shakti = Soma Shakti.
Kaal combines with Maya = Maya Kaal, Tamas = Mahakala Tamas, Shakti = Kali Kaal.
Maya combines with Tamas = Moha Tamas, Shakti = Mahamaya Shakti.
Tamas combines with Shakti = Kali Shakti.

Example three-element fusions:
Agni + Jal + Prithvi = Sharira Tattva.
Agni + Vayu + Vidyut = Vajragni.
Jal + Chandra + Maya = Swapna Jala.
Surya + Chandra + Akash = Jyotir Akash.
Kaal + Maya + Tamas = Mahamoha.

Higher synthesis:
Agni + Jal + Prithvi + Vayu = Bhuta Chakra.
Agni + Jal + Prithvi + Vayu + Akash = Pancha Mahabhuta.
Nature + storm + sun + moon = Deva Mandala.
All except Shakti = Pralaya Mandala.
All elements together = Aadishakti Mahatattva.

## Run

Open `index.html` in a browser. No build step is required.

## Next Build Targets

1. Add melee animation timing and dodge i-frames.
2. Add quest journal tracking for avatar unlock progress.
3. Add more named three-element and four-element fusions.
4. Add boss phases for each loka guardian.
5. Add sound and controller support.
