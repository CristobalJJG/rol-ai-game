import { Injectable } from '@angular/core';
import OpenAI from 'openai';
import { CompletionChoice } from 'openai/resources';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class IaService {

  private client: any = null;

  async getResponse() {
    await this.getClient().chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You will be provided with meeting notes, and your task is to summarize the meeting as follows:\n    \n    -Overall summary of discussion\n    -Action items (what needs to be done and who is doing it)\n    -If applicable, a list of topics that need to be discussed more fully in the next meeting."
        },
        {
          "role": "user",
          "content": "Meeting Date: March 5th, 2050\n    Meeting Time: 2:00 PM\n    Location: Conference Room 3B, Intergalactic Headquarters\n    \n    Attendees:\n    - Captain Stardust\n    - Dr. Quasar\n    - Lady Nebula\n    - Sir Supernova\n    - Ms. Comet\n    \n    Meeting called to order by Captain Stardust at 2:05 PM\n    \n    1. Introductions and welcome to our newest team member, Ms. Comet\n    \n    2. Discussion of our recent mission to Planet Zog\n    - Captain Stardust: \"Overall, a success, but communication with the Zogians was difficult. We need to improve our language skills.\"\n    - Dr. Quasar: \"Agreed. I'll start working on a Zogian-English dictionary right away.\"\n    - Lady Nebula: \"The Zogian food was out of this world, literally! We should consider having a Zogian food night on the ship.\"\n    \n    3. Addressing the space pirate issue in Sector 7\n    - Sir Supernova: \"We need a better strategy for dealing with these pirates. They've already plundered three cargo ships this month.\"\n    - Captain Stardust: \"I'll speak with Admiral Starbeam about increasing patrols in that area.\n    - Dr. Quasar: \"I've been working on a new cloaking technology that could help our ships avoid detection by the pirates. I'll need a few more weeks to finalize the prototype.\"\n    \n    4. Review of the annual Intergalactic Bake-Off\n    - Lady Nebula: \"I'm happy to report that our team placed second in the competition! Our Martian Mud Pie was a big hit!\"\n    - Ms. Comet: \"Let's aim for first place next year. I have a secret recipe for Jupiter Jello that I think could be a winner.\"\n    \n    5. Planning for the upcoming charity fundraiser\n    - Captain Stardust: \"We need some creative ideas for our booth at the Intergalactic Charity Bazaar.\"\n    - Sir Supernova: \"How about a 'Dunk the Alien' game? We can have people throw water balloons at a volunteer dressed as an alien.\"\n    - Dr. Quasar: \"I can set up a 'Name That Star' trivia game with prizes for the winners.\"\n    - Lady Nebula: \"Great ideas, everyone. Let's start gathering the supplies and preparing the games.\"\n    \n    6. Upcoming team-building retreat\n    - Ms. Comet: \"I would like to propose a team-building retreat to the Moon Resort and Spa. It's a great opportunity to bond and relax after our recent missions.\"\n    - Captain Stardust: \"Sounds like a fantastic idea. I'll check the budget and see if we can make it happen.\"\n    \n    7. Next meeting agenda items\n    - Update on the Zogian-English dictionary (Dr. Quasar)\n    - Progress report on the cloaking technology (Dr. Quasar)\n    - Results of increased patrols in Sector 7 (Captain Stardust)\n    - Final preparations for the Intergalactic Charity Bazaar (All)\n    \n    Meeting adjourned at 3:15 PM. Next meeting scheduled for March 19th, 2050 at 2:00 PM in Conference Room 3B, Intergalactic Headquarters."
        }
      ],
      temperature: 0.7,
      max_tokens: 150,
      top_p: 1,
    }).then((response: any) => {
      console.log(response);
      response?.choices.forEach((choice: any) => {
        console.log(choice);
      })
    });
  }

  /* Intento de Singletone? */
  private getClient(): OpenAI {
    if (this.client === null)
      this.client = new OpenAI({ apiKey: environment.openai, dangerouslyAllowBrowser: true, });
    return this.client;
  }


}
