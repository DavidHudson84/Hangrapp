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
    title: 'Boiler locked out on B14 this morning',
    createdAt: T('2026-08-18'),
    createdBy: UID.karen,
    kind: null,
    problemId: null,
    messages: [
      { id: 'mboilerfault-u', role: 'user',
        content: `Peter rang me at ten past seven — the Fulton has locked out and the panel is showing B14. He has pressed reset twice and it goes again after about a minute. We have got the racks from yesterday still to press and no steam. What is B14 and is this something he can sort out or do I need to get someone in?` },
      { id: 'mboilerfault-a', role: 'ai',
        content: `B14 on the FB-030 is the low water cut-out lockout — the primary probe is not seeing water at the level it expects, so the burner is being held off. That is the control doing exactly what it is there for, and the important thing is that it is not a fault to be worked around.

Three things cause it in that order of likelihood. The first is a genuinely low water level, which usually means the feedwater pump is not keeping up or has lost prime. The second is a fouled or scaled probe reading low when the level is actually fine — common if the water treatment has slipped, and your last inspection report flagged that the daily logs had gaps in May. The third is a probe or relay fault, which is the least likely of the three.

What Peter can do: check the gauge glass and see what the level actually is, blow down the gauge glass to make sure it is reading true, and check the feedwater pump is running and the feed tank has water in it. If the glass shows a proper level and the lockout still comes back, the probe is the suspect and that is where he stops.

What he must not do is keep pressing reset. Repeated resetting on a low water lockout is how a boiler gets dry-fired, and on a registered pressure vessel that is both a serious safety event and a notifiable one. Two resets is already one more than I would want.

Given it has repeated after a reset, my call is to get your boiler technician out this morning rather than lose the day guessing. Goldfields did your June inspection so they know the machine.

Want me to draft a service request to send them?` ,
        letterOffer: { subject: 'Service request — Fulton FB-030, repeating B14 low water lockout', type: 'service-request' } }
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
