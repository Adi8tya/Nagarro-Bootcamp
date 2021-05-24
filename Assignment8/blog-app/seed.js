const mongoose = require("mongoose");
const blogs = require("./models/blog");
const blogArray = [
  {
    title: "MacBook Pro M1",
    img: "https://cdn.mos.cms.futurecdn.net/c3EevbML8pgmkby5ueGgJi-970-80.jpg.webp",
    desc: `The MacBook Pro with M1 is a laptop with a unbeatable combo of power and endurance, making it one of the best laptops you can buy right now. And I know this because I’ve been using this system for a few months to plow through my workload, and I can barely get this machine to stutter no matter what I throw at it.

        With the new M1 chip, the Apple Silicon inside this 3-pound beast runs circles around most Windows laptops when it comes to sheer performance. Just as important, the new MacBook Pro M1 outlasts the competition on battery life — by a lot. We’re talking more than 16 hours of endurance. My only complaint is that Apple hasn’t touched the design.
        The MacBook Pro M1 had a release date of November 17 and starts at $1,299. That configuration gives you Apple’s powerful M1 chip with an 8-core CPU and 8-core GPU, plus 8GB of unified memory (RAM). You get 256GB of storage to start, but the $1,499 model of the MacBook Pro M1 includes 512GB of storage. 

If you want to configure the MacBook Pro M1 yourself, there are a number of upgrades available. It costs $200 to go from 8GB to 16GB of memory. If you want more than 512GB of storage, 1TB costs an extra $400 while 2TB will run you $800.`,
    category: "Technology",
    date: Date.now(),
  },
  {
    title: "OxygenOS updates for the OnePlus 7",
    img: "https://www.xda-developers.com/files/2019/11/OnePlus-7T-Pro-development-updates-featured-810x298_c.jpg",
    desc: `Despite what the minor number bump may tell you, this is a pretty modestly-sized update that comes with a lot of targeted bug fixes to make for an overall smoother experience after the arrival of Android 11 to this device series. Among other improvements, these phones are getting their respective May 2021 security updates (just a few days after their predecessors, the OnePlus 6 and the OnePlus 6T, got those patches as well), and OnePlus also mentions bug fixes such as improving the swiping experience of Shelf, improving the loading speed of pictures in the Gallery, as well as other targeted fixes in the Phone app, the camera, and even network fixes as well, including Wi-Fi and 4G stability.`,
    category: "Technology",
    date: Date.now(),
  },
  {
    title: "Windows 10 ‘News and Interests’ taskbar feature ",
    img: "https://images.hindustantimes.com/tech/img/2021/05/23/960x540/image_-_2021-01-16T090450.316_1610768097265_1610768104858_1621764826733.jpg",
    desc: `Microsoft is yet to roll out the 21H1 update, its first major release of the year to Windows 10 computers, but one of the most useful feature additions to the operating system in recent history has already begun rolling out to more users around the world, as part of the company’s May update.The company previously teased the News and Interests taskbar feature on its blog earlier this year, then began rolling it out to a few users last month. It is now available to a wider audience, according to Windows Latest. The report suggests that the recently released KB5003173 update enables the taskbar feed on Windows 10. However, it looks like the feature isn’t ready yet as there are visual bugs with the icons and it only works when your taskbar is located on the bottom of the screen.
        While there’s no word from Microsoft on whether the feature is officially rolling out as part of a recent update, the report states that many users have seen the new News and Interests taskbar feature show up after installing the latest Patch Tuesday update. Used to denote the second or fourth Tuesday of every month, the term ‘Patch Tuesday’ refers to the time when major technology companies usually issue updates to their software.`,
    category: "Technology",
    date: Date.now(),
  },
  {
    title: "Motorola One Action",
    img: "https://i.cdn.newsbytesapp.com/images/l15520210523175426.jpeg",
    desc: `Motorola has started rolling out the Android 11 update for its One Action handset launched in 2019.
        The firmware brings all the goodies of the latest operating system, including a refreshed UI, notification history, chat bubbles, and one-time permissions.
        Currently, the update is seeding in Brazil and is expected to be rolled out in other markets in the coming days.
        Here's our roundup.
        The Motorola One Action has an edge-to-edge screen with a punch-hole cut-out and a prominent bottom bezel. On the rear, there is a triple camera setup and a fingerprint reader for secure biometric authentication.
The device bears a 6.3-inch Full-HD+ (1080x2520 pixels) LCD display that offers a 21:9 aspect ratio.
It is available in three shades: Denim Blue, Pearl White, and Aqua Teal.`,
    category: "Technology",
    date: Date.now(),
  },
  {
    title: "Redmi Note 8 2021's chipset",
    img: "https://fdn.gsmarena.com/imgroot/news/21/05/redmi-note-8-2021-processor-camera-display-specs/-1200x900m/gsmarena_001.jpg",
    desc: `Xiaomi sub-brand Redmi will soon launch the Redmi Note 8 2021 to celebrate the sale of 25 million units of the original Note 8 globally, and it recently revealed that the Note 8 2021 will pack a waterdrop notch display, which it has now confirmed will measure 6.3" diagonally.

        Additionally, Redmi said that the Note 8 2021 will be powered by the Helio G85 SoC and sport a quad camera on the back with the primary shooter using a 48MP sensor. Redmi doesn't tell us anything about the rest of the modules, but previous reports claim it will be joined by ultrawide, macro, and depth units whose resolutions are currently unknown.
        
        One of the images shared by Redmi also reveals the Note 8 2021 will feature a rear-mounted fingerprint reader and shows the phone in two colors.
        Of course, we are yet to hear about its screen resolution and cameras, but that will likely remain unchanged, meaning the Note 8 2021's 6.3" screen will have 1080p resolution, the selfie shooter will use a 13MP sensor, and the primary camera will be accompanied by 8MP ultrawide, 2MP macro, and 2MP depth modules.

We expect Redmi to confirm more features of the Redmi Note 8 2021 in the coming days.`,
    category: "Technology",
    date: Date.now(),
  },
  {
    title: "Premier League final day",
    img: "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0523%2Fr857992_1296x729_16%2D9.jpg&w=570&format=jpg",
    desc: `Leicester, whose 4-2 defeat at home to Spurs saw them miss out the Champions League on the final day for the second year in a row, stood 10 points clear of Liverpool on March 7. (They spent 93%, or 567 days, of the past two seasons in the top four only to finish fifth on both occasions.) Liverpool's late-season surge, combined with Leicester losing five and winning just four of the final 10 games, saw last season's champions sneak in at the expense of Brendan Rodgers' side, who can console themselves with winning the FA Cup for the first time in their history earlier this month.
        Liverpool simply did the hard work, with crucial away wins at Manchester United, West Brom and Burnley prior to this finale. Leicester, though, only have themselves to blame for missing out on the top four, having twice held the lead against Spurs at the King Power. With Chelsea losing at Aston Villa, a win would have been enough for Leicester to finish fourth. But a Harry Kane goal -- which also secured him this season's Golden Boot -- two from Gareth Bale and a Kasper Schmeichel own goal cancelled out two Jamie Vardy penalties and left Leicester in fifth.
        `,
    category: "Sports",
    date: Date.now(),
  },
  {
    title: "NBA playoff tracker",
    img: "https://s.yimg.com/ny/api/res/1.2/r4_XySTLCoZBS2Dl86Sn9Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTQ3MC4wNzI4NDU2MjkyNjIyNQ--/https://s.yimg.com/os/creatr-uploaded-images/2021-05/4fbd3f60-bc45-11eb-8cbe-7c7880377338",
    desc: `Jazz struggle on offense minus Mitchell
        Utah opened strong, riding its third-ranked defense to a 24-17 first-quarter lead. But as the Grizzlies found their rhythm, Utah's normally potent offense went cold without Mitchell, and Memphis closed the first half on a 17-2 run.
        
        Brooks led the surge en route to 31 points and seven rebounds as Memphis extended a 49-43 halftime edge to as much a 97-82 midway through the fourth quarter. A Jazz team that led the league with 16.7 3-pointers per game struggled to find its shot with its leading scorer in street clothes. For the game, Utah shot 12 of 47 (25.5%) from 3-point distance and 42% from the field.
        The Grizzlies didn't run away with the game thanks to a surging Bogdanovic, who finished with 29 points after going scoreless in the first half. But Morant countered for Memphis, scoring 10 of his 26 points in the fourth quarter.

The Jazz had a chance to tie the game late with the ball in Bogdonavic's hands trailing 110-107 in the final 10 seconds. But Memphis wisely fouled Bogdonavic on the floor before he had a chance to connect on his fifth 3-pointer of the half. He hit both free throws, but Brooks found a wide open layup on the other end to secure the final margin as Rudy Gobert watched from the bench after fouling out late in the fourth quarter.
For Memphis, it was another confidence-building win after beating the San Antonio Spurs and the Golden State Warriors in the play-in tournament just to secure their spot in the playoffs. The Grizzlies have now won eight out of 10 games dating back to the regular season.`,
    category: "Sports",
    date: Date.now(),
  },
  {
    title: "Chris Paul dismisses Frank Vogel",
    img: "https://s.yimg.com/ny/api/res/1.2/Z0YIaMz_R50n1dyBwWZ.Hg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNQ--/https://s.yimg.com/os/creatr-uploaded-images/2021-05/9e8d5450-bc2b-11eb-bfeb-b92d55db1611",
    desc: `I don’t know anything about that. I have absolutely nothing to say about that. We’re just playing basketball and competing,” Paul told Yahoo Sports after the Suns’ 99-90 victory to take a 1-0 series lead. “I’m just thankful we got the win, and I’m looking forward to Game 2.”

        The play in question occurred three minutes into the fourth quarter when James was at the free-throw line.
        
        Upon jumping and attempting to secure a rebound off his own miss, Paul sprinted from behind to box out the four-time MVP winner and James collapsed awkwardly to the hardwood.
        
        James began rolling around on the court while holding onto his left shoulder.
        
        “My view was overly aggressive box out, a dangerous play where ’Bron was in the air and got uppercut,” Vogel told media members on a postgame Zoom call.
        
        Paul told Yahoo Sports that he walked by multiple Laker players after the game, including Anthony Davis, and no one said a word to him about the play.
        
        “Anytime you hit somebody's leg, it's always a dangerous play. That's what you don't want,” Davis said on a postgame Zoom call. “You don’t want anyone to get injured on plays like that. But the intensity is where it’s supposed to be. Guys getting into it, chirping. That’s playoff basketball.”
        The play in question occurred three minutes into the fourth quarter when James was at the free-throw line.

Upon jumping and attempting to secure a rebound off his own miss, Paul sprinted from behind to box out the four-time MVP winner and James collapsed awkwardly to the hardwood.

James began rolling around on the court while holding onto his left shoulder.

“My view was overly aggressive box out, a dangerous play where ’Bron was in the air and got uppercut,” Vogel told media members on a postgame Zoom call.

Paul told Yahoo Sports that he walked by multiple Laker players after the game, including Anthony Davis, and no one said a word to him about the play.`,
    category: "Sports",
    date: Date.now(),
  },
  {
    title: "PGA Championship",
    img: "https://s.yimg.com/ny/api/res/1.2/zRSuE8yOntjoEiHeOHBwaQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNQ--/https://s.yimg.com/os/creatr-uploaded-images/2021-05/8b97e780-bb53-11eb-adde-7b5df5c4607d",
    desc: `Koepka, the favorite, has won two of the last three of these things.

        Mickelson, meanwhile, hasn’t won a PGA Tour event since 2019, hasn’t won a major since 2013, and he’s as prone as anyone to throwing up a 70 one day (as he did Saturday), 80 the next. And, oh yeah, he’s 50.
        
        It was only a few months ago he finished T-20, 11 strokes back in a Champions Tour event.
        
        And yet he’s not leading this tournament because the rest of the field is flailing about. He’s leading because he’s taking charge.
        
        He fired a 4-under 32 on his front nine to build a four-stroke lead. He was aggressive, creative, smart, daring and accurate — all the best of Phil Mickelson over the years and none of the worst.
        
        Over an 18-hole stretch going back to his second nine Friday, Mickelson was 10-under par. With par being 72, that equates to a 62 … which would be the lowest round ever recorded in any major championship.
        
        In short, he was as perfect as one could be on his front nine, and he was so on a course that does not lend itself to perfection.

Do you believe in Phil Mickelson now?
Jay Hart
Jay Hart
Sun, May 23, 2021, 4:46 AM

Brooks Koepka

Phil Mickelson
Does Phil Mickelson have your attention now?

Going into Saturday’s third round of the PGA Championship, Mickelson was not the betting favorite … despite holding a share of the lead.

He still wasn’t the betting favorite after he birdied the second hole to take sole possession of the lead, nor was he after he birdied the third to move two shots clear of the field.

And now, as he heads into the final round with a 1-stroke lead over Brooks Koepka?

Still not the favorite.

KIAWAH ISLAND, SOUTH CAROLINA - MAY 22: Fans look on from a tree as Phil Mickelson of the United States plays his shot from the seventh tee during the third round of the 2021 PGA Championship at Kiawah Island Resort&#39;s Ocean Course on May 22, 2021 in Kiawah Island, South Carolina. (Photo by Patrick Smith/Getty Images)
Fans look on from a tree as Phil Mickelson plays his shot from the seventh tee during the third round of the 2021 PGA Championship at Kiawah. (Patrick Smith/Getty Images)
Not that you can blame the oddsmakers, who have Mickelson at +275 and Koepka as the favorite on +150.


Koepka, the favorite, has won two of the last three of these things.

Mickelson, meanwhile, hasn’t won a PGA Tour event since 2019, hasn’t won a major since 2013, and he’s as prone as anyone to throwing up a 70 one day (as he did Saturday), 80 the next. And, oh yeah, he’s 50.

It was only a few months ago he finished T-20, 11 strokes back in a Champions Tour event.

And yet he’s not leading this tournament because the rest of the field is flailing about. He’s leading because he’s taking charge.

He fired a 4-under 32 on his front nine to build a four-stroke lead. He was aggressive, creative, smart, daring and accurate — all the best of Phil Mickelson over the years and none of the worst.

Over an 18-hole stretch going back to his second nine Friday, Mickelson was 10-under par. With par being 72, that equates to a 62 … which would be the lowest round ever recorded in any major championship.

In short, he was as perfect as one could be on his front nine, and he was so on a course that does not lend itself to perfection.


The question, of course, is where did this come from? The way he tells it, his focus over the last few months has been on ... focus — staying present on every shot. He says he's played upward of 45 holes a day, challenging himself to maintain focus on every shot, so that when he only has to play 18, it would be like a batter taking off the weight leaving the on-deck circle.

Still he had to navigate the back nine at the Ocean Course at Kiawah Island, which includes a five-hole finishing stretch that is considered by many to be the toughest in golf.

He started the back with a birdie at 10, pushing his lead to a staggering five strokes.

And then …

A makeable birdie putt missed at 11 followed by a bogey at 12 and a double at 13 after snap-hooking his tee shot into the water.

He went from staring down a putt for a six-stroke to lead to having his lead trimmed to just 1 in a matter of three holes.`,
    category: "Sports",
    date: Date.now(),
  },
  {
    title: "Bangladesh vs Sri Lanka",
    img: "https://source.unsplash.com/1600x900/?technology",
    desc: `Spinner Mehidy Hasan Miraz claimed four wickets as Bangladesh overcame a late fightback from Wanindu Hasaranga to beat Sri Lanka by 33 runs in the first one-day international on Sunday. Mehidy returned figures of 4-30 from 10 overs of his off spin to help bowl out Sri Lanka for 224 in the tourists' chase of 258. Number eight Hasaranga hit a valiant 74 off 60 balls. Mustafizur Rahman took three wickets with fellow fast bowler Mohammad Saifuddin claiming two. Earlier Mushfiqur Rahim (84) and Mahmudullah Riyad (54) put on 109 runs for the fifth wicket to guide Bangladesh to 257-6 after they opted to bat at the start of the three-match series.

        In reply, Sri Lanka were in trouble at 102-6 before Hasaranga put on 47 runs with Dasun Shanaka and then 62 with Isuru Udana for the eighth wicket to revive their hopes.
        
        Saifuddin (2-49) bowled Shanaka for 14 and then claimed the wicket of Hasaranga, who hit three fours and five sixes in his 60-ball knock.
        
        Mustafizur, who finished with figures of 3-34, sent back Udana for 21 on the very next ball.
        
        Sri Lanka suffered a blow before the match as all-rounder Shiran Fernando was ruled out after being tested Covid-19 positive twice in two days
        Sri Lankan players, who are also involved in pay row with country's cricket authorities ahead of the series, were led by Kusal Perera.

"Losing isn't good, but we had a lot of positives. The bowlers bowled in the right directions. Batting wise Wanindu (Hasaranga) did a good job," said Perera.

Bangladesh skipper Tamim Iqbal hit 52 before Dhananjaya de Silva's two wickets in two balls in the 23rd over put them in trouble at 99-4.

Mushfiqur and Mahmudullah then put on a key stand to thwart the Sri Lankan bowling with some attacking batting.

Mushfiqur's 87-ball innings ended when he was caught by Udana at short third man off Lakshan Sandakan while attempting a reverse sweep.`,
    category: "Sports",
    date: Date.now(),
  },

  {
    title: "Human-monkey chimeric embryos",
    img: "https://www.sciencedaily.com/images/2021/04/210415142904_1_540x360.jpg",
    desc: `Investigators in China and the United States have injected human stem cells into primate embryos and were able to grow chimeric embryos for a significant period of time -- up to 20 days. The research, despite its ethical concerns, has the potential to provide new insights into developmental biology and evolution. It also has implications for developing new models of human biology and disease. The work appears April 15 in the journal Cell.
        nterspecies chimeras in mammals have been made since the 1970s, when they were generated in rodents and used to study early developmental processes. The advance that made the current study possible came last year when this study's collaborating team -- led by Weizhi Ji of Kunming University of Science and Technology in Yunnan, China -- generated technology that allowed monkey embryos to stay alive and grow outside the body for an extended period of time.

In the current study, six days after the monkey embryos had been created, each one was injected with 25 human cells. The cells were from an induced pluripotent cell line known as extended pluripotent stem cells, which have the potential to contribute to both embryonic and extra-embryonic tissues. After one day, human cells were detected in 132 embryos. After 10 days, 103 of the chimeric embryos were still developing. Survival soon began declining, and by day 19, only three chimeras were still alive. Importantly, though, the percentage of human cells in the embryos remained high throughout the time they continued to grow.
The investigators performed transcriptome analysis on both the human and monkey cells from the embryos. "From these analyses, several communication pathways that were either novel or strengthened in the chimeric cells were identified," Izpisua Belmonte explains. "Understanding which pathways are involved in chimeric cell communication will allow us to possibly enhance this communication and increase the efficiency of chimerism in a host species that's more evolutionarily distant to humans.
An accompanying Preview in Cell outlines potential ethical considerations surrounding the generation of human/non-human primate chimeras. Izpisua Belmonte also notes that "it is our responsibility as scientists to conduct our research thoughtfully, following all the ethical, legal, and social guidelines in place." He adds that before beginning this work, "ethical consultations and reviews were performed both at the institutional level and via outreach to non-affiliated bioethicists. This thorough and detailed process helped guide our experiments.`,
    category: "Health And Medicine",
    date: Date.now(),
  },
  {
    title: "Genetic effects of Chernobyl radiation",
    img: "https://www.sciencedaily.com/images/2021/04/210422150435_1_540x360.jpg",
    desc: `In two landmark studies, researchers have used cutting-edge genomic tools to investigate the potential health effects of exposure to ionizing radiation, a known carcinogen, from the 1986 accident at the Chernobyl nuclear power plant in northern Ukraine. One study found no evidence that radiation exposure to parents resulted in new genetic changes being passed from parent to child. The second study documented the genetic changes in the tumors of people who developed thyroid cancer after being exposed as children or fetuses to the radiation released by the accident.
        The Chernobyl accident exposed millions of people in the surrounding region to radioactive contaminants. Studies have provided much of today's knowledge about cancers caused by radiation exposures from nuclear power plant accidents. The new research builds on this foundation using next-generation DNA sequencing and other genomic characterization tools to analyze biospecimens from people in Ukraine who were affected by the disaster.
        One or both of the parents had been workers who helped clean up from the accident or had been evacuated because they lived in close proximity to the accident site. Each parent was evaluated for protracted exposure to ionizing radiation, which may have occurred through the consumption of contaminated milk (that is, milk from cows that grazed on pastures that had been contaminated by radioactive fallout). The mothers and fathers experienced a range of radiation doses
        For the range of radiation exposures experienced by the parents in the study, there was no evidence from the whole-genome sequencing data of an increase in the number or types of de novo mutations in their children born between 46 weeks and 15 years after the accident. The number of de novo mutations observed in these children were highly similar to those of the general population with comparable characteristics. As a result, the findings suggest that the ionizing radiation exposure from the accident had a minimal, if any, impact on the health of the subsequent generation.`,
    category: "Health And Medicine",
    date: Date.now(),
  },
  {
    title: "Experimental drug shows potential against Alzheimer's disease",
    img: "https://www.sciencedaily.com/images/2021/04/210422150402_1_540x360.jpg",
    desc: `Researchers at Albert Einstein College of Medicine have designed an experimental drug that reversed key symptoms of Alzheimer's disease in mice. The drug works by reinvigorating a cellular cleaning mechanism that gets rid of unwanted proteins by digesting and recycling them. The study was published online today in the journal Cell.

        "Discoveries in mice don't always translate to humans, especially in Alzheimer's disease," said co-study leader Ana Maria Cuervo, M.D., Ph.D., the Robert and Renée Belfer Chair for the Study of Neurodegenerative Diseases, professor of developmental and molecular biology, and co-director of the Institute for Aging Research at Einstein. "But we were encouraged to find in our study that the drop-off in cellular cleaning that contributes to Alzheimer's in mice also occurs in people with the disease, suggesting that our drug may also work in humans." In the 1990s, Dr. Cuervo discovered the existence of this cell-cleaning process, known as chaperone-mediated autophagy (CMA) and has published 200 papers on its role in health and disease.
        
        CMA becomes less efficient as people age, increasing the risk that unwanted proteins will accumulate into insoluble clumps that damage cells. In fact, Alzheimer's and all other neurodegenerative diseases are characterized by the presence of toxic protein aggregates in patients' brains. The Cell paper reveals a dynamic interplay between CMA and Alzheimer's disease, with loss of CMA in neurons contributing to Alzheimer's and vice versa. The findings suggest that drugs for revving up CMA may offer hope for treating neurodegenerative diseases.
        Dr. Cuervo's team first looked at whether impaired CMA contributes to Alzheimer's. To do so, they genetically engineered a mouse to have excitatory brain neurons that lacked CMA. The absence of CMA in one type of brain cell was enough to cause short-term memory loss, impaired walking, and other problems often found in rodent models of Alzheimer's disease. In addition, the absence of CMA profoundly disrupted proteostasis -- the cells' ability to regulate the proteins they contain. Normally soluble proteins had shifted to being insoluble and at risk for clumping into toxic aggregates.

Dr. Cuervo suspected the converse was also true: that early Alzheimer's impairs CMA. So she and her colleagues studied a mouse model of early Alzheimer's in which brain neurons were made to produce defective copies of the protein tau. Evidence indicates that abnormal copies of tau clump together to form neurofibrillary tangles that contribute to Alzheimer's. The research team focused on CMA activity within neurons of the hippocampus -- the brain region crucial for memory and learning. They found that CMA activity in those neurons was significantly reduced compared to control animals.`,
    category: "Health And Medicine",
    date: Date.now(),
  },
  {
    title: "Researchers identify factors influencing vaccine hesitancy in USA",
    img: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20210524014855/ri/750/picture/2021/5/shutterstock_1854498166_(2).jpg",
    desc: `A team of scientists from the Washington University, in St. Louis, USA, has recently conducted a survey to analyze factors responsible for coronavirus disease 2019 (COVID-19) vaccination hesitancy among US citizens. The study findings reveal that public willingness to vaccination can likely be improved by allowing them to select vaccine brands and locations. In contrast, vaccine mandates can further increase public aversion toward vaccination. The study is currently available on the medRxiv* preprint server.
        The recent outbreak of severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), the causative pathogen of coronavirus disease 2019 (COVID-19), has put a significant burden on the global healthcare system because of high viral infectivity and disease severity. Even though there have been numerous advancements in vaccine science, the mass vaccination programs in many countries face a serious challenge due to public skepticism about the COVID-19 vaccine.

Since COVID-19 vaccines have been developed rapidly, there is an increasing public hesitancy toward vaccine safety and efficacy. A significant proportion of the general population is even unconvinced about the actual severity of COVID-19.
The study was conducted on 2,895 US citizens (age range: 33 – 62 years) between March 15 and March 22, 2021. Of all participants, 38% were already vaccinated, 41% reported strong willingness for vaccination, 28% reported relatively less willingness for vaccination, 18% reported unwillingness for vaccination, and 10% reported strong unwillingness for vaccination.  

As reported by the participants with strong willingness for vaccines, the main reasons for not getting vaccinated include difficulty securing vaccine appointments, lack of information on vaccine location, and distance of vaccination centers.  `,
    category: "Health And Medicine",
    date: Date.now(),
  },
  {
    title: "Mucormycosis Treatment",
    img: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20210520085146/ri/673/picture/2021/5/shutterstock_1976194598.jpg",
    desc: `ndia is currently fighting its second wave of COVID-19 while cases of rare and often fatal fungal disease mucormycosis are beginning to soar alongside this second surge of COVID cases. The infection, which has high mortality rates, is threatening the health of those across India where many regions are already struggling to handle the rise in COVID-19 cases.

        Mucormycosis is challenging to treat, often this is exacerbated as patients commonly seek medical attention too late, once the infection has already begun to spread. First-line therapy usually involves anti-fungal treatments, however, because mucormycosis is notoriously difficult to cure, treatment strategies involve methods of early diagnosis, to catch the infection before it spreads.
        
        There is also a focus on reversing the disease that underlies the infection, currently, COVID-19 is acting as the underlying disease for the rising cases of mucormycosis in India. Finally, doctors focus on surgical management of the fungal infection, the debridement of infected tissue is often vital to eradicating mucormycosis. Here, we discuss all three strategies.
        The earlier patients begin receiving antifungal therapy, the better their chances of survival are. Recent evidence demonstrates that anti-fungal treatment initiated within the first five days following diagnosis significantly improves the patient’s chances of survival in comparison to those who begin therapy six or more days after diagnosis (83% vs 49%). Therefore, the efficacy of antifungal therapy, the key first-line treatment for mucormycosis, is heavily dependent on early diagnosis and initiation of treatment`,
    category: "Health And Medicine",
    date: Date.now(),
  },
];
const seed = async () => {
  await blogs.create(blogArray);
  console.log("Data Base Seeded.......");
};
module.exports = seed;
