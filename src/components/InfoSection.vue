<template>
  <div class="text-white bg-black flex flex-col justify-center py-16 px-4 w-[720px]">
    <div class="font-extrabold text-5xl text-center">INFO</div>
    <div class="divide-y text-xl">
      <div class="text-center space-y-4 py-16">
        <p>Co-bots is an NFT project with a twist:</p>
        <p class="font-extrabold">Each Co-Bot doubles as a ticket in a 250ETH raffle!</p>
        <p class="font-extrabold">(10 prizes of 25ETH)</p>
      </div>

      <info-sub-section 
        question="Who created Co-Bots?">
        Co-Bots was created by smlg with smart contract help from clemlaflemme.eth. We met as early members of the Chain Runners community! smlg is also a proud member of the Noadz, CrypToadz, and FRWC communities.
      </info-sub-section>

      <info-sub-section 
        question="How will the raffle work?">
        The raffle will be drawn 24 hours after the last Co-Bot is minted. The 10 winning Co-Bots will be randomly drawn by the Co-Bots smart contract, one winner every 30 seconds. The winning Co-Bots will appear on this site as they're drawn and the prizes will be sent to the associated wallets immediately by the contract.
      </info-sub-section>

      <info-sub-section 
        question="Did someone say BONUS PRIZES?">
        <div>
          Yep! In addition to the 10 main prizes, 
          <text class="font-extrabold">
            the community can work together to unlock 20 more prizes of 2.5ETH each.
          </text> 
          Here’s how:
        </div>

        <div>
          5,000 Co-Bots will be minted with blue screens and 5,000 will be minted with red screens. Once the last Co-Bot is minted, buttons will appear on the site that let you change the colour of your bot's screen (s/o on-chain art 💪).
        </div>

        <div class="font-extrabold">
          If the community coordinates to change at least 9,500 of the Co-Bots' screens to the same colour before the raffle draw (24 hours after minting out), the bonus prizes will be unlocked! The 20 winners will be drawn randomly by the smart contract immediately after the main prizes.
        </div>
      </info-sub-section>

      <info-sub-section question="What happens if the Co-Bots don't mint out?">
        Minting will be live for 7 days. If the Co-Bots don't mint out by then, holders will be able to claim a full refund (minus gas) on this site and the raffle will be cancelled. You'll have 7 days to claim your refund.
      </info-sub-section>

      <info-sub-section question="How many Co-Bots can I mint?">
        You can mint 20 Co-Bots per wallet. 🥺
      </info-sub-section>

      <info-sub-section question="What happens after the raffle?">
        <div>
          Our hope is that the Co-Bots will bond over this event and become a lasting force in the NFT world!
        </div>
        <div>
          We'd like to do more Co-Bot events, but aren't making any promises right now. Please only buy a Co-Bot for the cool pixel art and fun community event!
        </div>
      </info-sub-section>

      <info-sub-section question="Can the same wallet win multiple prizes?">
        No. Once a winning Co-Bot has been chosen, the smart contract will add the associated wallet address to a list of addresses that are no longer eligible to win.
      </info-sub-section>

      <info-sub-section question="Can the creators win prizes?">
        No. We’ll be minting 10 Co-Bots for ourselves, but they won’t be eligible to win prizes.
      </info-sub-section>

      <info-sub-section question="What are the royalties on secondary sales?">
        They are none! We want you to trade Co-Bots as freely as possible.
      </info-sub-section>

      <info-sub-section question="Is there a Discord?">
        There’s no creator-made Discord for Co-Bots, but we’d love to see the community create one! If you do, invite us? 🥺
      </info-sub-section>

      <info-sub-section question="Why should I trust you?">
        <div>
          Actually, you don’t need to trust us at all. The mint, raffle, and refund mechanisms are implemented completely trustlessly in the Co-Bots smart contract. That means that the contract will carry out those functions automatically, and we couldn’t stop it even if we wanted to.
        </div>

        <div>
          We won’t be able to withdraw any ETH until one of the following conditions is met:
        </div>

        <ol class="list-decimal list-inside space-y-3">
          <li>
            The raffle is complete and all the prizes have been sent to the winners
          </li> 
          <li>
            The Co-Bots didn’t mint out and the 7 day refund period has passed
          </li> 
          <li>
            Block ________ has been mined on Ethereum, roughly 21 days after contract deployment (this condition is a fail safe)
          </li>
        </ol>

        <div>
          You can view the contract on Etherscan by clicking the Etherscan button in the nav bar above.
        </div>
      </info-sub-section>

      <info-sub-section question="Is the art on-chain?">
        Why yes, it is! The art for Co-Bots is generated by code in our smart contract. That means it doesn't depend on third party servers to host it. As long as Ethereum exists, so will your Co-Bot art!
      </info-sub-section>

      <info-sub-section question="Is Co-Bots CC0?">
        Yep! To the extent possible under law, we have waived all copyright and related or neighboring rights to Co-Bots.
      </info-sub-section>

    </div>
    <Logo class="mt-16 fill-silver2"/>
  </div>
</template>

<script>
import InfoSubSection from "./InfoSubSection.vue"
import Logo from "@/components/logo.vue"

export default {
   name: 'InfoSection',
   components: {
     InfoSubSection,
     Logo
   }
}
</script>