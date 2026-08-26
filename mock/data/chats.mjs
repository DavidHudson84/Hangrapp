// Two chats that are not attached to a problem report.
//
// They exist to prove retrieval works, and they are the two questions worth
// asking in a demo: one that can only be answered out of an equipment manual,
// and one that can only be answered out of the lease. If the consultant answers
// either of these from general knowledge instead of from the document, the
// document library is not doing its job and you want to find that out before a
// prospect does, not during.

import { UID } from './identity.mjs';

const T = (iso) => new Date(iso + 'T09:00:00+10:00').getTime();

export const STANDALONE_CHATS = [
  {
    id: 'cboilerfault',
    title: 'Boiler keeps dropping out on B05',
    createdAt: T('2026-08-18'),
    createdBy: UID.karen,
    kind: null,
    problemId: null,
    messages: [
      { id: 'mboilerfault-u', role: 'user',
        content: `Peter rang me at ten past seven — the Fulton has dropped out and the panel is showing B05. He has hit reset twice and it goes again after about a minute. We have got yesterday's racks still to press and no steam. Is this something he can sort out or do I need to get someone in?` },
      { id: 'mboilerfault-a', role: 'ai',
        content: `B05 on the FB-030 is LOW WATER — FIRST: the level has fallen to the first low water tip and the burner is being held off. That is the control doing exactly what it is there for.

The important part is the reset class. B05 is Class A once — resettable a single time, and Class B if it comes back. Peter has now reset it twice, and the manual is blunt about why that matters: a single B05 at the start of a heavy Monday with a hotwell nobody refilled over the weekend is explicable. A B05 that recurs is not, because the boiler has six minutes of water at full fire and something is taking it away.

So stop resetting, and work the feedwater side in the order the manual sets out. Is there water in the hotwell. Is the make-up supply on. Is the softener stuck in regeneration and starving the hotwell. Is the feed pump running when it is called. Is the feed line stop valve open. Is the strainer blocked. Is the bottom blowdown valve passing — that shows as a hot blowdown line between blowdowns. Is there a visible leak.

Two things he must not do. Do not add water if the gauge glass is empty. And if it goes to B06 — LOW WATER, SECOND, LOCKOUT — that is the first device having failed to protect, and it is stop, do not reset, do not add water, isolate the gas, call the technician. B06 is Class B and an operator may never clear it.

Given it has already come back twice, my call is to get your boiler technician out this morning rather than lose the day. Goldfields did your June inspection so they know the machine — and worth knowing, that report already flagged your daily logs had three gaps in May, which is the kind of thing that gets asked about if this turns into something.

Want me to draft the service request?`,
        letterOffer: { subject: 'Service request — Fulton FB-030, recurring B05 low water', type: 'service-request' } }
    ]
  },

{
    id: 'cleasereview',
    title: 'What does the lease actually say about the rent review?',
    createdAt: T('2026-08-21'),
    createdBy: UID.karen,
    kind: null,
    problemId: null,
    messages: [
      { id: 'mleasereview-u', role: 'user',
        content: `Castleton have sent through a notice saying the rent goes up in March. I want to know what the lease actually allows them to do before I ring them back, because last year they came in higher than I expected and I did not have the document in front of me. What is the review mechanism and is there anything I should be checking?` },
      { id: 'mleasereview-a', role: 'ai',
        content: `Your lease reviews the rent to CPI on 1 March each year — Melbourne All Groups — and there is no market review and no ratchet in the mechanism itself. So the number is arithmetic, not negotiation, and it should be checkable in about two minutes.

Base rent is $58,400 plus GST, which is $4,866.67 a month. Applied to the CPI movement for the relevant period, that gives you a figure you can compute yourself rather than accept. Ask Castleton to state which index period they have used. That is the single most common place these go wrong — using a quarter that has not been published yet, or using the Australia-wide figure rather than Melbourne.

Two other things worth checking while you have it open. Your outgoings are estimated at $9,200 a year and the Retail Leases Act obliges the landlord to give you a written estimate before each year and then reconcile it against what was actually spent. If you have not had a reconciliation for the last year, ask for it — you are entitled to it and it is sometimes in your favour.

And the Act prohibits a landlord recovering land tax from a retail tenant in Victoria. It is worth reading down the outgoings line by line for anything that looks like it, because it does turn up.

On timing: your first five-year term runs to 28 February 2029, and the option to renew has an exercise window that you do not want to discover late. That is a 2028 problem, but it is the kind that is expensive if it is missed.

Do you want me to draft the reply to Castleton asking them to substantiate the index period and provide the outgoings reconciliation?`,
        letterOffer: { subject: 'Rent review — request to substantiate the CPI calculation and provide the outgoings reconciliation', type: 'customer-notice' } }
    ]
  }
];
