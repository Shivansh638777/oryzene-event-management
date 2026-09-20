export type CityProfile = {
  slug: string; name: string; description: string; region: string; latitude: string; longitude: string; paragraphs: string[];
};

export const cityProfiles: Record<string, CityProfile> = {
  kanpur: {
    slug: "kanpur", name: "Kanpur", region: "Industrial heart, generous spirit", description: "Oryzene is an event management company in Kanpur planning weddings, corporate events, celebrations and live experiences with local care.", latitude: "26.4499", longitude: "80.3319",
    paragraphs: [
      "Kanpur events have a particular kind of momentum. Families arrive from across the city and beyond, old school friends find one another again, and a guest list that looked manageable on paper suddenly becomes three generations of stories in one room. Oryzene helps bring that energy into focus. As an event management company in Kanpur, we plan the movement behind the celebration so the people at the centre of it can be fully present.",
      "We work comfortably across the city’s different event settings: a wedding at a hotel near the Ganga, a family celebration around Swaroop Nagar, a corporate evening close to the commercial centre, or a community event that needs a more open footprint. We understand that the venue is only the beginning. Parking, arrival, family hospitality, catering flow, stage sightlines, sound and the timing of photographs all shape how an evening feels. Our planning makes those details part of one guest journey.",
      "For Kanpur weddings, we can coordinate the familiar rituals while giving the design a point of view that feels personal. For businesses, we bring a clear run of show to launches, dealer meets, conferences and annual gatherings. For birthdays, anniversaries and live programs, we build a team around the scale of the brief, from trusted decorators and caterers to photographers, artists and technical crews.",
      "The best local planning is not loud about being local. It shows up as a vendor who knows the venue, a backup that is ready before it is needed and a coordinator who can speak to every part of the family with ease. That is the kind of event management Oryzene brings to Kanpur: warm on the surface, rigorous underneath, and always shaped around your people.",
    ],
  },
  lucknow: {
    slug: "lucknow", name: "Lucknow", region: "Tehzeeb, detail and a little drama", description: "Oryzene is an event management company in Lucknow creating refined weddings, corporate gatherings and celebrations across the city.", latitude: "26.8467", longitude: "80.9462",
    paragraphs: [
      "Lucknow knows how to make an entrance. There is a natural generosity in the city’s hospitality, from the first cup of chai to the last conversation after dinner. Oryzene plans events in Lucknow with that sense of welcome at the centre. We are an event management company in Lucknow for people who want a celebration to feel polished without losing its warmth, and considered without becoming stiff.",
      "The city gives an event planner a rich set of cues. A heritage-inspired evening near Hazratganj may call for a slower, more layered guest experience. A contemporary hotel celebration in Gomti Nagar might need clean production, a strong stage picture and effortless transitions between functions. A gathering near the riverfront or a large family venue may bring different questions around arrival, weather, parking, power and crowd movement. We use that context to make the plan more specific, not more complicated.",
      "For weddings, our work can include venue shortlisting, hospitality, decor direction, food and beverage coordination, artist management, family schedules and the full show flow across mehendi, sangeet, ceremony and reception. For corporate events, we shape the message and the moment together, so a launch, awards night or leadership gathering respects the audience as much as the brand. Personal celebrations get the same care: a birthday or anniversary should carry the character of the person being celebrated.",
      "Lucknow rewards attention. The welcome signage should be in the right place, the music should change at the right moment and a guest should never have to ask where to go next. Oryzene brings a local vendor network, clear communication and calm on-ground direction to every brief. The result is event management in Lucknow that feels gracious, memorable and quietly well run.",
    ],
  },
  gorakhpur: {
    slug: "gorakhpur", name: "Gorakhpur", region: "The eastern pulse", description: "Oryzene is an event management company in Gorakhpur planning spirited weddings, family celebrations, corporate events and live shows.", latitude: "26.7606", longitude: "83.3732",
    paragraphs: [
      "Gorakhpur gatherings carry their own generous scale. A family celebration can bring relatives in from several districts, a wedding weekend can fill a venue with overlapping circles of friends, and a local cultural program can turn an ordinary evening into a shared occasion. Oryzene is an event management company in Gorakhpur that knows the plan has to hold all of that energy without flattening it.",
      "We help clients think through the practical shape of an event in the city: where guests are coming from, how a venue near the city centre or around the medical and education corridors will receive them, how families will move through a multi-function wedding and how entertainment can land for a mixed-age audience. The details may be different for a hotel ballroom, a lawn celebration or a community program, but the principle stays the same: people should feel looked after from arrival to goodbye.",
      "Our wedding planning support covers the full arc, from vendor conversations and a visual direction to guest hospitality, food, decor, artists, photography and show calling. For birthdays and anniversaries, we create a setting that feels like the family rather than a generic package. For corporate events and college or esports programs, we add the production discipline needed for registration, stage, sound, screens, schedules and audience flow.",
      "Gorakhpur has a strong sense of occasion, and that is something to protect. We work with local vendors who understand the pace of the city and bring the judgment to adapt when a guest count shifts, weather changes or a speaker runs late. Oryzene combines that local familiarity with a clear process, giving you an event that feels lively, personal and ready for the unexpected.",
    ],
  },
};
