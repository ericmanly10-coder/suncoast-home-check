// Service-area city pages for Suncoast Home Check — matched to the Tampa Bay /
// Gulf Coast home-watch footprint. Each entry has genuinely unique, home-watch-
// specific local content (snowbird & vacant-home angle) so pages read as real
// local guides, not thin duplicates. Rendered by src/pages/areas/[slug].astro.
export const cities = [
  {
    slug: 'tampa',
    name: 'Tampa',
    county: 'Hillsborough County',
    intro:
      "Tampa's most desirable neighborhoods are full of homes, townhomes, and downtown condos that sit empty for months while owners travel for work or split time up north. In a humid Gulf climate, a closed-up home can hide a slow leak, a failed AC, or storm damage for weeks — which is exactly why scheduled home watch matters here. We keep dated eyes on Hyde Park bungalows, Water Street condos, and Westshore townhomes so nothing goes unnoticed while you're away.",
    hook:
      "From a Davis Islands waterfront to a Channel District high-rise, a Tampa home left unwatched is a risk you don't have to take — we check it and show you, every visit.",
    neighborhoods: ['Hyde Park', 'Davis Islands', 'Bayshore Beautiful', 'Westshore', 'Water Street', 'Channel District'],
    nearby: [['Safety Harbor', 'safety-harbor'], ['St. Petersburg', 'st-petersburg'], ['Clearwater', 'clearwater']],
  },
  {
    slug: 'st-petersburg',
    name: 'St. Petersburg',
    county: 'Pinellas County',
    intro:
      "St. Petersburg draws snowbirds and second-home owners to its walkable downtown condos and historic-district homes — many of which sit vacant through the summer storm season. Between low-lying Shore Acres, the brick streets of the Old Northeast, and the towers along Beach Drive, the risks range from tidal flooding to a stalled AC in a closed condo. Regular home watch with a photo report gives out-of-town owners real proof their St. Pete property is secure and dry.",
    hook:
      "Whether it's a Snell Isle waterfront home or a downtown condo you visit twice a year, we keep watch and document it — so you're never guessing from a thousand miles away.",
    neighborhoods: ['Old Northeast', 'Downtown / Beach Drive', 'Snell Isle', 'Historic Kenwood', 'Shore Acres', 'Tierra Verde'],
    nearby: [['St Pete Beach', 'st-pete-beach'], ['Clearwater', 'clearwater'], ['Tampa', 'tampa']],
  },
  {
    slug: 'clearwater',
    name: 'Clearwater',
    county: 'Pinellas County',
    intro:
      "Clearwater is a snowbird stronghold — from the beachfront condos of Sand Key and Island Estates to the mainland homes around Countryside and Harbor Oaks, thousands of properties sit unoccupied for half the year. Salt air, humidity, and hurricane exposure are hard on a closed-up home, and a beach condo left sealed can develop mold or humidity problems fast. Our scheduled visits catch those issues early and give you a dated report after every check.",
    hook:
      "Beachfront or mainland, a Clearwater home you only use seasonally still needs a trusted local eye — we provide it and prove it, visit after visit.",
    neighborhoods: ['Clearwater Beach', 'Island Estates', 'Sand Key', 'Countryside', 'Harbor Oaks', 'Morningside'],
    nearby: [['Belleair', 'belleair'], ['Safety Harbor', 'safety-harbor'], ['Indian Rocks Beach', 'indian-rocks-beach']],
  },
  {
    slug: 'sarasota',
    name: 'Sarasota',
    county: 'Sarasota County',
    intro:
      "Sarasota is one of Florida's premier second-home markets, with barrier-island condos and homes on Siesta, Lido, and Longboat Key owned by people who live most of the year elsewhere. A luxury coastal property left empty is exposed to storms, humidity, and the slow problems that only surface when no one is looking. Home watch here means someone reliable is walking your Sarasota home on a schedule and documenting its condition for you and your insurer.",
    hook:
      "From a Siesta Key beach condo to a West of Trail estate, we keep watch on your Sarasota property year-round — thorough, local, and fully documented.",
    neighborhoods: ['Siesta Key', 'Lido Key', 'Longboat Key', 'Downtown Sarasota', 'St. Armands', 'West of Trail'],
    nearby: [['St. Petersburg', 'st-petersburg'], ['Clearwater', 'clearwater'], ['Tampa', 'tampa']],
  },
  {
    slug: 'safety-harbor',
    name: 'Safety Harbor',
    county: 'Pinellas County',
    intro:
      "Safety Harbor's quiet, tree-lined streets and bayfront homes attract seasonal owners and retirees who spend part of the year away. Its charm is also its risk — a closed-up historic home near the waterfront can develop moisture, pest, or storm issues that sit unnoticed in a low-traffic town. Regular home watch keeps a trusted local presence on your Safety Harbor property while you're gone, with photos to prove it.",
    hook:
      "In a small town where an empty home can go a long time unnoticed, our scheduled checks make sure yours never does.",
    neighborhoods: ['Historic Main Street', 'Bayfront / Pier District', 'Green Springs', 'Philippe Estates', 'Harbor Oaks area', 'Weavers'],
    nearby: [['Clearwater', 'clearwater'], ['Tampa', 'tampa'], ['St. Petersburg', 'st-petersburg']],
  },
  {
    slug: 'belleair',
    name: 'Belleair',
    county: 'Pinellas County',
    intro:
      "Belleair's estate homes and golf-course properties are among Pinellas County's most valuable — and many belong to owners who travel or winter elsewhere. A high-value home sitting empty above the intracoastal deserves more than a neighbor's occasional glance; humidity, irrigation faults, and storm exposure can all do quiet damage. Our home-watch visits give Belleair owners a documented, professional set of eyes on the property whenever they're away.",
    hook:
      "For a tightly-held Belleair estate left empty for the season, discreet, reliable home watch is simply good stewardship — and we deliver it with a report every visit.",
    neighborhoods: ['Belleview / Bluffs', 'Pelican Golf Club', 'Country Club Estates', 'Intracoastal waterfront', 'Belleair Country Club', 'Poinsettia'],
    nearby: [['Belleair Beach', 'belleair-beach'], ['Clearwater', 'clearwater'], ['Indian Rocks Beach', 'indian-rocks-beach']],
  },
  {
    slug: 'belleair-beach',
    name: 'Belleair Beach',
    county: 'Pinellas County',
    intro:
      "Belleair Beach is a quiet barrier-island community where many Gulf-front and canal homes are second homes used only part of the year. Direct exposure to salt, storms, and tidal water makes an unattended beach house especially vulnerable — a small breach or a failed AC can become a major loss before anyone notices. Scheduled home watch keeps your Belleair Beach property checked, secured, and photographed through every season.",
    hook:
      "Gulf-front, canal, or intracoastal, a Belleair Beach home left empty needs a storm-season eye — we check it thoroughly and show you the proof.",
    neighborhoods: ['Gulf Boulevard', 'Bellevue Estates', 'Intracoastal canals', 'Morgan Drive', 'Bayside Drive', 'Deeded beach-access streets'],
    nearby: [['Indian Rocks Beach', 'indian-rocks-beach'], ['Belleair', 'belleair'], ['Indian Shores', 'indian-shores']],
  },
  {
    slug: 'indian-rocks-beach',
    name: 'Indian Rocks Beach',
    county: 'Pinellas County',
    intro:
      "Indian Rocks Beach — \"IRB\" — is full of coastal cottages, newer beach homes, and low-rise condos, many owned as second homes or seasonal getaways. When a beach property sits closed through the humid summer and hurricane season, moisture, mold, and storm damage are constant threats. Our home-watch visits keep your IRB home dry, secure, and monitored, with a dated photo report each time.",
    hook:
      "A closed-up IRB cottage or condo is exactly the kind of home that benefits most from a regular, documented check — and that's what we do.",
    neighborhoods: ['Gulf Boulevard', 'Central IRB cottages', 'Intracoastal canals', 'Curlew Landings', 'Harbor Drive', 'Beach Trail'],
    nearby: [['Indian Shores', 'indian-shores'], ['Belleair Beach', 'belleair-beach'], ['Redington Beach', 'redington-beach']],
  },
  {
    slug: 'indian-shores',
    name: 'Indian Shores',
    county: 'Pinellas County',
    intro:
      "Indian Shores is a slender Gulf-front town where nearly every home touches water — and a large share are second homes, seasonal condos, and vacation properties. With the Gulf on one side and the intracoastal on the other, an unattended home here faces salt, storms, and humidity from every direction. Regular home watch means your Indian Shores condo or canal home is checked on schedule and documented while you're away.",
    hook:
      "Between the Gulf and the intracoastal, an empty Indian Shores home has water on all sides — we keep watch so a small problem never becomes a flooded one.",
    neighborhoods: ['Gulf Boulevard condos', 'Intracoastal canal homes', 'Tiki Gardens area', 'Municipal Beach', 'Coquina', 'Gulf-front streets'],
    nearby: [['Redington Beach', 'redington-beach'], ['Indian Rocks Beach', 'indian-rocks-beach'], ['Madeira Beach', 'madeira-beach']],
  },
  {
    slug: 'redington-beach',
    name: 'Redington Beach',
    county: 'Pinellas County',
    intro:
      "The Redington beaches are among the quietest, most residential stretches of the Pinellas coast — largely single-family Gulf-front and canal homes, many owned by snowbirds and out-of-state families. Because it's so residential and low-traffic, an empty home here can go a long time without anyone noticing a leak, an open door, or storm damage. Our scheduled home watch keeps a trusted local eye on your Redington property and reports back every visit.",
    hook:
      "In a calm, tightly-held beach town, a vacant home needs someone checking on purpose — not by chance. That's the whole point of home watch.",
    neighborhoods: ['Gulf Boulevard', 'Redington Shores', 'North Redington Beach', 'Intracoastal canals', 'Redington Long Pier area', 'Gulf-front avenues'],
    nearby: [['Indian Shores', 'indian-shores'], ['Madeira Beach', 'madeira-beach'], ['Indian Rocks Beach', 'indian-rocks-beach']],
  },
  {
    slug: 'madeira-beach',
    name: 'Madeira Beach',
    county: 'Pinellas County',
    intro:
      "Madeira Beach — \"Mad Beach\" — mixes Gulf-front condos and canal homes with quick access to John's Pass, and many are second homes or seasonal rentals left empty between stays. An unattended coastal property here is exposed to storms, salt, and the humidity that builds in a sealed home fast. Home watch keeps your Madeira Beach condo or canal home secured, checked between guests or seasons, and documented for you.",
    hook:
      "Whether it sits empty between rentals or through the off-season, a Madeira Beach home needs regular eyes — we provide them and photograph every visit.",
    neighborhoods: ['John’s Pass Village', 'Gulf Boulevard condos', 'Crystal Island', 'Boca Ciega canals', 'Municipal Marina area', 'Village of Madeira Beach'],
    nearby: [['Redington Beach', 'redington-beach'], ['St Pete Beach', 'st-pete-beach'], ['Indian Shores', 'indian-shores']],
  },
  {
    slug: 'st-pete-beach',
    name: 'St Pete Beach',
    county: 'Pinellas County',
    intro:
      "St Pete Beach is a marquee resort town where Gulf-front condos, Pass-a-Grille cottages, and intracoastal homes are frequently owned as second homes or seasonal retreats. Prime beachfront also means prime storm and flood exposure, and a closed-up condo can develop humidity or mold trouble while the owner is up north. Our home-watch visits keep your St Pete Beach property secure, dry, and documented through hurricane season and beyond.",
    hook:
      "From a Pass-a-Grille cottage to a Gulf Boulevard condo, a St Pete Beach home you use seasonally still needs a year-round watchman — that's us.",
    neighborhoods: ['Pass-a-Grille', 'Vina del Mar', 'Don CeSar / Gulf Blvd', 'Belle Vista', 'Three Palms', 'Bahia Shores'],
    nearby: [['Madeira Beach', 'madeira-beach'], ['St. Petersburg', 'st-petersburg'], ['Indian Rocks Beach', 'indian-rocks-beach']],
  },
];
