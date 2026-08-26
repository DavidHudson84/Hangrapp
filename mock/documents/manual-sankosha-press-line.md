# SANKOSHA PRESS LINE

## LP-580 · UP-120 · TT-240 · TL-260 — Combined Operations, Safety and Maintenance Manual

**Manual revision:** Rev 5 · **Revision date:** March 2022 · **Supersedes:** Rev 4, August 2019
**Installed at:** Main Street Dry Cleaners, Shop 4, 118 Hargreaves Street, Bendigo VIC 3550

### Machines covered

| Model | Description | Serial number | Built | Installed |
|---|---|---|---|---|
| LP-580 | Three-station shirt unit — collar/cuff press, body former, twin sleeve press | SK-LP580-17-3241 | 2017 | 12/02/2018 |
| UP-120 | Utility press, mushroom and rectangular buck | SK-UP120-17-1188 | 2017 | 12/02/2018 |
| TT-240 | Trouser topper, expanding waist clamp, twin vacuum | SK-TT240-19-0774 | 2019 | 04/11/2019 |
| TL-260 | Trouser legger, dual-leg buck, automatic clamp sequence | SK-TL260-19-0775 | 2019 | 04/11/2019 |

The four machines are supplied and documented as a matched line. They share a common
steam header, condensate return, compressed air ring main and distribution board.

### Revision history

| Rev | Date | Change |
|---|---|---|
| 1 | 04/2014 | First issue, LP-580 and UP-120 only. |
| 2 | 09/2015 | Added fabric class tables; revised collar clamp adjustment. |
| 3 | 06/2017 | Added TT-240 and TL-260; combined services table introduced. |
| 4 | 08/2019 | Two-hand control test frequency changed to monthly; added SU-09, SU-11, TT-06; pad part numbers moved to the 5-series. |
| 5 | 03/2022 | Added SU-13 and SU-14 jam codes; added non-iron and fused-collar settings; expanded finishing fault section; added quarterly steam trap test; corrected LP-580 air consumption, understated in Rev 4. |

---

## 1. Front matter

### 1.1 Purpose

This manual covers safe operation, adjustment, routine maintenance and fault
diagnosis of the four machines above. It is written for the **operator**, who loads
and unloads and clears simple stoppages; the **supervisor**, who sets the machines up
and signs off safety device tests; and the **technician**, who holds a trade licence
or manufacturer's authorisation.

It assumes a competent presser and does not teach pressing. A copy must be kept at
the line, not in an office. A machine that is sold or relocated goes with this manual
and its commissioning record. Nothing here overrides a legal duty on the occupier;
where this manual conflicts with a regulator's requirement, the regulator's
requirement applies.

### 1.2 How to use this manual

- **New to the line:** read Section 2 in full, then the loading procedure for your
  machine. Do not start work until Appendix D is signed.
- **Running the line:** Sections 5, 6 and 7. Keep the fabric class table (6.4) and
  the fault tables (Section 11) visible from the operating position.
- **A garment has come back:** Section 8 gives the cause, the prevention and whether
  it can be recovered.
- **A machine has stopped with a code:** Section 11. If the table says technician,
  isolate the machine and call one.
- **Ordering pads, covers or spares:** Section 9, quoting the serial number.
- **A contractor is quoting service:** Section 10 for intervals, Section 12 for what
  voids warranty and certification.

Cross-references are written "see 6.4". Fault codes are written SU-07 and mean the
same thing wherever they appear.

### 1.3 Symbols

| Symbol | Meaning |
|---|---|
| **DANGER** | Will cause death or serious injury if the instruction is not followed. |
| **WARNING** | May cause death or serious injury. |
| **CAUTION** | May cause minor injury, or will damage the machine or the garment. |
| **NOTE** | Affects the result of the work but is not a hazard. |
| **TECHNICIAN** | Must be done by a licensed or authorised person. An operator must not attempt it. |
| **HOT SURFACE** | Can cause a full-thickness burn for up to 40 minutes after the steam is closed. |

### 1.4 Machine identification

| Model | Data plate location |
|---|---|
| LP-580 | Rear of the body former column, 1,450 mm above floor, beside the isolator |
| UP-120 | Left-hand side frame below the buck, 900 mm above floor |
| TT-240 | Rear panel, upper left, beside the air inlet |
| TL-260 | Rear panel, upper left, beside the air inlet |

Each plate carries model, serial number, year, supply voltage, full load current,
maximum steam and air pressure and machine mass. Do not remove, paint over or obscure
a plate. Order a replacement against the serial number in this manual.

### 1.5 Intended use

These machines finish laundered and dry cleaned textile garments by saturated steam,
mechanical pressure or air tension, and vacuum extraction. The line must not be used:

- on garments still wet with solvent, or taken from a dry cleaning machine before the
  drying and deodorising cycle has completed;
- on garments contaminated with flammable liquid, solvent-based paint, adhesive or
  unidentified chemical residue;
- on garments whose care label prohibits ironing, or specifies a maximum iron
  temperature below the surface temperatures in Section 4;
- to dry garments — a garment presented wetter than the limits in 5.3 will not finish
  and will water spot;
- on articles with rigid components — buckles, boning, heavy zips, badges, plastic
  trim — placed between a head and a buck;
- as a bench, a step or a garment rest.

### 1.6 Residual risks

With every guard fitted and the machines used as intended, these risks remain and
must be managed by the occupier through training and supervision: crush injury at the
UP-120 head-to-buck line and the TT-240 and TL-260 clamp lines; burns from heads,
bucks, escaping steam and hot condensate; scalding from the LP-580 body former, which
discharges steam through the form skin and not through a duct; entanglement of loose
clothing, hair, lanyards and jewellery at the LP-580 sleeve press and the TT-240
clamp; noise at 81 dB(A) with all four machines running; heat stress in summer, and
the tendency of hot operators to take shortcuts; and manual handling of shirt hampers
and garment rails.

---

## 2. Safety

Read this section before you operate any machine on this line. A dry cleaning machine
hurts people slowly, through vapour. A press hurts people in a quarter of a second,
through a closing head that does not know a hand is under it.

Every serious injury recorded on this equipment falls into one of four groups: a
defeated two-hand control; a hand put into a machine to straighten a garment
mid-cycle; a burn from a surface the operator believed was cold; and a jam cleared
without isolating the machine. All four are avoidable.

### 2.1 Two-hand controls

**DANGER** — Never defeat, tie down, tape, wedge, bridge or otherwise disable a
two-hand control. A press with a defeated two-hand control will amputate.

The UP-120 head and the TT-240 and TL-260 clamps are initiated by two palm buttons,
620 mm apart on the UP-120 and 540 mm on the other two, pressed within 500 ms of each
other. The spacing and the timing exist for one reason: while both buttons are held,
both hands are provably outside the closing line. Designed properties, tested monthly
under 10.6:

- **Concurrency** — both buttons within 500 ms, or the machine does not start and a
  fault is logged.
- **Continuous actuation** — release either button during closing and motion stops
  immediately and reverses to open.
- **Release before restart** — a held or stuck button cannot arm the next cycle.
- **Single-fault tolerance** — each button has two contacts monitored by the safety
  relay. A welded contact, broken wire or channel discrepancy holds the machine off.

Prohibited, and dismissible conduct: taping, tying or wiring a button down; wedging a
coin, hanger hook, peg or card into a button; pressing a button with a knee, elbow,
hip or forehead so the free hand can hold the garment; resting a weight on a button;
or having a second person hold one button. The last is the most dangerous, because
that person cannot see where your hands are.

If you find a control defeated, stop the machine, isolate it, remove the defeat and
report it before the machine is used again. Record it in Appendix B.

**NOTE** — If a garment cannot be positioned without a third hand, it is being
pressed the wrong way. Change the technique, not the safety control.

### 2.2 Crush hazards

| Machine | Closing element | Force | Closing time | Stroke at risk |
|---|---|---|---|---|
| UP-120 | Head to buck | 26 kN at 620 kPa | 0.9 s | Full 320 mm |
| TT-240 | Waist clamp | 4.4 kN | 0.6 s | 180 mm |
| TT-240 | Seat and fly clamps | 2.1 kN | 0.6 s | 150 mm |
| TL-260 | Leg clamp pair | 6.8 kN | 1.1 s | 240 mm |
| LP-580 | Collar/cuff clamp bar | 9.5 kN | 0.7 s | 110 mm |
| LP-580 | Sleeve press pads | 7.2 kN | 0.8 s | 160 mm |

**WARNING** — A hand in the UP-120 at contact is crushed and burned at the same
moment. The head is at 165 °C, does not lift when it meets an obstruction, and has no
force sensing. It is a pneumatic press, not a servo press.

Keep both hands on the palm buttons from initiation until the head or clamp is fully
open. Never put a hand between a head and a buck, or between clamp jaws, while the
machine has air on it. Do not reach across a closing line for a hanger, a ticket or a
dropped button. Do not station a second person at the machine. Keep the floor clear —
most reaching-in injuries begin as a loss of balance.

### 2.3 Burn hazards — heads, bucks and formers

**HOT SURFACE** — Normal operating temperatures:

| Surface | Temperature |
|---|---|
| UP-120 head face | 160–170 °C |
| UP-120 buck face under cover | 118–124 °C |
| LP-580 collar/cuff plate | 175–185 °C |
| LP-580 cuff bars | 170–180 °C |
| LP-580 body former skin during steam | 105–112 °C |
| TT-240 waist and seat plates | 130–140 °C |
| TL-260 leg buck faces | 140–150 °C |
| Unlagged steam pipework | up to 165 °C |
| Condensate return at the trap | 95–140 °C |

One second of contact with a 165 °C surface produces a full-thickness burn. There is
no brief touch that is safe on a press head.

- Assume every head, buck, plate and former is hot unless you have personally closed
  the steam valve and waited 40 minutes. Switching off at the wall does nothing.
- Padding and covers do not make a buck safe to touch.
- Do not test a surface with the back of a hand, a wet finger or flicked water. Use
  the panel readout, or wait the full cooling time.
- Wear the issued Kevlar-lined gloves (SK-GEN-GLV-2) for pad and cover changes and
  jam clearing. Cotton gloves are not adequate and become a hazard when wet.
- Long sleeves and a full apron reduce forearm burns from the LP-580 steam blast. Do
  not roll sleeves up at the shirt unit.

**Burn first aid.** Cool with cool running water for 20 minutes. No ice, butter, oil,
ointment or flour. Remove rings and watches before swelling starts; do not pull off
clothing stuck to the burn. Cover loosely with cling film or a clean non-adherent
dressing. Any burn larger than a 20 cent coin, any burn to the hand, face or a joint,
and any burn that looks white or leathery goes to hospital. Record it.

### 2.4 Steam and condensate

The line is fed from the Fulton FB-030 boiler through a common header. Steam at the
machine is saturated at 550–620 kPa gauge, about 160 °C. Condensate at the traps is
above 95 °C and flashes to steam at atmospheric pressure.

**DANGER** — A steam leak is invisible for the first 200–300 mm from the leak point.
The dangerous part of the jet is the part you cannot see. Never run a hand along a
pipe or hose to find a leak. Use a length of dry timber and watch for the wood to be
wetted or scored.

- Do not open, slacken or disconnect a steam or condensate fitting under pressure.
  Close the machine valve, then the header valve if needed, and let the section cool.
  The UP-120 and LP-580 hold residual pressure in the head after the valve closes;
  crack a fitting slowly and stand to one side.
- Steam hoses are stainless-braided PTFE rated 1,000 kPa at 200 °C with crimped ends.
  Do not fit anything less and do not repair one with a worm-drive clamp. A hose that
  has been kinked once is scrap.
- The condensate return is common to all four machines and is under pressure while
  the line runs. Do not open a strainer cap or a trap union on a running line.
- Water hammer at start-up means condensate is lying in the header. Warm the line on
  the header warming valve for ten minutes before opening the main. Repeated hammer
  will eventually fail a gasket or a hose end.

### 2.5 Guard interlocks

| Machine | Guard or interlock | Type | Effect when opened |
|---|---|---|---|
| LP-580 | Sleeve press side guards | Tongue-actuated key switch | Sleeve cycle inhibited; SU-05 |
| LP-580 | Rear drive access door | Key switch | All motion inhibited; SU-05 |
| LP-580 | Body former lower shroud | Fixed, tool removal | No interlock; technician task |
| UP-120 | Front finger guard bar | Fixed mechanical | Restricts approach |
| UP-120 | Rear and side head guards | Fixed, tool removal | No interlock; technician task |
| TT-240 | Clamp area light curtain | Type 2, 30 mm resolution | Motion stops and reverses; TT-04 |
| TT-240 | Rear panel | Key switch | All motion inhibited; TT-04 |
| TL-260 | Leg buck side guards | Key switch | All motion inhibited; TL-04 |
| TL-260 | Vacuum plenum access | Key switch | Vacuum inhibited; TL-06 |

**WARNING** — Interlock defeat is prohibited. Do not carry a spare actuator key, do
not tape a key into a switch body, and do not run a machine with a guard off "just for
one garment". A defeated interlock is treated exactly as a defeated two-hand control.
A failed interlock takes the machine out of service until a technician has repaired it.

### 2.6 Emergency stop

| Machine | E-stop locations |
|---|---|
| LP-580 | Console right-hand side; sleeve press station; rear of the former column |
| UP-120 | Below the palm button bar, centre |
| TT-240 | Right-hand side of the control panel |
| TL-260 | Right-hand side of the control panel |

A **line master stop** on the wall column between the LP-580 and UP-120, at 1,300 mm,
removes power from all four machines and closes the line steam solenoid.

An emergency stop removes power from all motion outputs, vents the working air
circuits and de-energises the steam solenoids. It does **not** open a head or clamp —
air-loaded elements stay where they are — and it does not make anything cold.

To reset: make the machine safe, remove the cause, twist the mushroom head to release,
then press the blue RESET. Motion never resumes automatically.

**NOTE** — Emergency stop is not a way to stop at the end of a job. Routine use wears
the contacts and hides genuine faults. Use the cycle stop.

### 2.7 If a hand is trapped

Display this at the line and rehearse it at induction. In an actual entrapment you
will not have time to read it.

1. **Do not pull.** Pulling a trapped hand against a closed head tears skin.
2. **Hit the nearest emergency stop.** This removes power and vents working air.
3. **Close that machine's steam valve** — the yellow-handled ball valve on the header
   drop, labelled by model. Heat keeps injuring while the surface is against skin.
4. **Release the head or clamp using the manual release:**
   - **UP-120** — red release lever on the left of the head casting; pull fully
     towards you and hold. The head lifts on spring assistance in about 3 seconds.
   - **TT-240 / TL-260** — black knurled bleed screw on the clamp cylinder head, two
     turns anticlockwise with the 6 mm hex key clipped beside it.
   - **LP-580 collar/cuff** — release lever behind the right-hand side cover, pulled
     down and held.
   - **LP-580 sleeve press** — press the grey VENT button beside the E-stop.
5. **Call 000** for ambulance. Address: Shop 4, 118 Hargreaves Street, Bendigo, rear
   plant access off Bath Lane.
6. **Cool the burn** with cool running water while waiting, unless there is
   uncontrolled bleeding — control that first with direct pressure.
7. **Do not restart the machine.** Isolate and lock it out.
8. **Preserve the scene.** Do not clean up, remove the garment or adjust anything.

A crush injury involving amputation, degloving, serious laceration or serious burn is
a notifiable incident under the Occupational Health and Safety Act 2004 (Vic). The
occupier must notify WorkSafe Victoria immediately by telephone and must not disturb
the site except to help the injured person or make the site safe.

### 2.8 Lockout and tagout

Any work inside guarding, on the steam side, on the air side or on the electrical
system needs full isolation. "Off" is not "isolated". All three energy sources must be
isolated.

| Energy | Isolation point | Lock |
|---|---|---|
| Electrical | Rotary isolator at the machine, or its breaker in DB-2 | Padlock through the hasp |
| Steam | Yellow-handled ball valve on the header drop | Lockout clamp, SK-GEN-LOK-1 |
| Compressed air | Blue lockable ball valve with integral vent | Padlock through the lever |

1. Tell everyone at the line the machine is being isolated.
2. Complete the running cycle and stop normally.
3. Close and lock the steam valve; allow at least 40 minutes cooling, longer for work
   on a head face.
4. Close and lock the air valve; watch the panel air gauge fall to zero.
5. Open and lock the electrical isolator.
6. Fit a personal danger tag with your name, the date and the reason.
7. **Attempt to start the machine on the two-hand control. It must not move.** This
   step is not optional and is the only proof the isolation is real.
8. Bleed residual condensate at the trap before opening a steam joint.

Only the person who fitted a lock may remove it. If a lock must be removed in its
owner's absence, the supervisor must confirm the person is off site and the machine is
clear, record the removal, and notify them before their next shift.

### 2.9 Clearing a jam safely

Most press injuries in this industry happen while clearing a jam.

**DANGER** — Never clear a jam with the machine live. The cycle may resume when the
obstruction moves, and it will resume at full force.

1. Stop with the cycle stop, or the E-stop if the machine is already faulted.
2. Isolate under 2.8. Air and electrical isolation is the minimum; close the steam
   valve as well if any part of you will be within 200 mm of a heated surface.
3. Confirm zero air on the panel gauge and put on heat-resistant gloves.
4. Remove the obstruction by hand or with the hooked jam tool (SK-GEN-TOL-4) — not a
   screwdriver, a knife or a hanger. Do not lever against a cover or a sensor.
5. If fabric has fused to a heated surface, let it cool, then use the cleaning block
   (SK-GEN-CLN-1). Never scrape a hot surface.
6. Inspect the cover and padding at the jam point before returning to service.
7. Remove the isolation, restore steam, run one empty cycle before loading.
8. Record the jam in the daily log if it raised a code or damaged a cover.

### 2.10 The specific risk of reaching in mid-cycle

This has its own sub-section because it is the most common way an operator on a shirt
line is injured, and because it does not feel dangerous at the time.

The sequence is always the same. The operator loads a shirt. As the cycle starts they
see a folded placket, a twisted cuff or a ridden-up yoke. They know the shirt will
have to be redone, which costs a minute they do not have. So they reach in, because
the head has not closed yet and there appears to be time.

There is not time. The LP-580 collar clamp bar closes 0.7 seconds after initiation,
and a hand is 0.4 seconds from the clamp line. The UP-120 head travels its full 320 mm
in 0.9 seconds. A hand that is inside when the operator realises the timing was
misjudged cannot be withdrawn.

- Once a cycle is initiated, **no part of your body enters the machine**, whatever the
  garment is doing.
- A badly loaded garment gets pressed badly and then gets pressed again. That is the
  correct outcome. A redone shirt costs 45 seconds. A crushed hand costs a career.
- Fix what you can see **before** you initiate. The loading technique in 5.4 exists to
  make faults visible at the loading stage.
- If you are reaching in more than occasionally, the size setting, the clamp tension
  or the pad condition is wrong. Report it.
- Supervisors: stop an operator seen reaching into a running machine and retrain them.
  Do not let it pass because they are quick and have never been hurt. Everybody who
  has been hurt on a press had never been hurt on a press.

### 2.11 PPE and clothing

| Item | When required | Part |
|---|---|---|
| Kevlar-lined heat-resistant gloves | Pad and cover changes, jam clearing, work near a hot surface | SK-GEN-GLV-2 |
| Cotton-rich long-sleeved shirt | All press work | Operator supplied |
| Full-length apron | LP-580 and UP-120 operation | SK-GEN-APR-1 |
| Closed-toe safety footwear | All plant areas | Operator supplied |
| Hearing protection | Over 30 minutes with three or more machines running | Class 4 earplug |
| Safety glasses | Descaling, trap work, air blow-down | Generic |

Prohibited at the line: rings, bracelets, watches, necklaces, lanyards, loose scarves,
open shoes and long hair worn loose. Operators at the LP-580 and TT-240 must not wear
ties.

---

## 3. Services required across the line

The four machines are fed from common services. The figures below are what each
machine requires **at the machine connection**, not at the boiler or the compressor.
Pipe sizing, drops, filters and regulators must be arranged so that these values are
met with all four machines cycling together.

### 3.1 Steam

Saturated steam, dry, at the machine isolating valve.

| Machine | Working pressure | Minimum pressure | Peak demand | Average at typical duty | Connection |
|---|---|---|---|---|---|
| LP-580 | 550–620 kPa g | 480 kPa g | 118 kg/h | 62 kg/h at 60% duty | DN25 |
| UP-120 | 550–620 kPa g | 480 kPa g | 46 kg/h | 22 kg/h at 45% duty | DN20 |
| TT-240 | 520–620 kPa g | 450 kPa g | 38 kg/h | 19 kg/h at 50% duty | DN20 |
| TL-260 | 520–620 kPa g | 450 kPa g | 44 kg/h | 24 kg/h at 55% duty | DN20 |

Below the minimum pressure the machines will run but will not finish correctly. The
first symptom of low steam is a shirt body that comes off the LP-580 damp across the
back, followed by collar puckering. The controller raises SU-01 below 480 kPa and
locks the machine out below 400 kPa.

Header requirements:

- The line takes off the **top** of the header, never the side or the bottom.
- Each machine has its own drop with a yellow-handled lockable ball valve, a
  Y-strainer with an 800 micron screen, and a separator.
- The header is trapped at its far end and at any low point.
- Header lagging must be continuous. An unlagged 4 m run costs about 6 kg/h in
  condensation and is the most common reason a line that was commissioned correctly
  no longer finishes properly three years later.
- The header warming valve is a DN15 bypass around the main header valve. It is
  opened first at start-up and closed once the header is at pressure.

### 3.2 Condensate return

| Machine | Trap type | Trap size | Condensate load | Return connection |
|---|---|---|---|---|
| LP-580 | Float and thermostatic ×2 | DN20 | 118 kg/h peak | DN25 |
| UP-120 | Thermodynamic | DN15 | 46 kg/h peak | DN20 |
| TT-240 | Float and thermostatic | DN15 | 38 kg/h peak | DN20 |
| TL-260 | Float and thermostatic | DN15 | 44 kg/h peak | DN20 |

The return is gravity to a common vented receiver, then pumped back to the boiler
feed tank. Each machine has a non-return valve on its return branch. A failed trap
blowing through will pressurise the common return and will stop the other three
machines draining, so a single failed trap presents as poor finishing on machines
that are themselves in perfect order. Trap testing is quarterly under 10.7 and is the
first check when the whole line goes soft at once.

### 3.3 Compressed air

Clean, dry air from the Pilot K25 compressor and refrigerated dryer, through the ring
main.

| Machine | Regulated pressure | Minimum | Consumption per cycle | Consumption at rated output |
|---|---|---|---|---|
| LP-580 | 620 kPa | 550 kPa | 340 L free air per shirt | 20.4 m³/h at 60 shirts/h |
| UP-120 | 620 kPa | 550 kPa | 95 L free air per press | 8.6 m³/h at 90 presses/h |
| TT-240 | 600 kPa | 520 kPa | 130 L free air per cycle | 7.8 m³/h at 60 cycles/h |
| TL-260 | 600 kPa | 520 kPa | 155 L free air per cycle | 9.3 m³/h at 60 cycles/h |

**Line total at rated output: 46.1 m³/h (0.77 m³/min).**

Air quality: ISO 8573-1 class 4.4.3 or better. Dew point at least 10 °C below the
lowest ambient the line will see. Each machine has its own filter, regulator and
lubricator (FRL) set at the drop, taken from the **top** of the ring main through a
swan neck so that condensate lying in the main cannot run into the machine.

**CAUTION** — Water carried into the TT-240 or TL-260 clamp cylinders causes sticking
clamps and, in cold weather, intermittent TT-05 and TL-05 faults that disappear by
mid-morning and come back the next day. Drain the receiver and check the dryer before
chasing a control fault with that pattern.

### 3.4 Vacuum

All four machines have integral vacuum. There is no shared vacuum plant.

| Machine | Blower duty | Motor | Airflow | Suction at buck | Filter |
|---|---|---|---|---|---|
| LP-580 | Body former and sleeve | 1.5 kW | 42 L/s | 2.6 kPa | SK-580-FLT-1 |
| UP-120 | Buck | 0.75 kW | 26 L/s | 2.1 kPa | SK-120-FLT-1 |
| TT-240 | Twin outlet | 0.75 kW | 28 L/s | 2.2 kPa | SK-240-FLT-1 |
| TL-260 | Leg plenum | 1.1 kW | 34 L/s | 2.4 kPa | SK-260-FLT-1 |

Each blower exhausts to the plant room through a lint filter. Exhaust must not be
ducted into the ceiling void or into the retail area. Vacuum is what sets the finish
and removes the residual moisture; a machine with a blocked filter will produce work
that looks acceptable at the machine and creases in the bag.

### 3.5 Electrical supply

| Machine | Supply | Connected load | Full load current | Protection | Control voltage |
|---|---|---|---|---|---|
| LP-580 | 400 V 3ph + N + E, 50 Hz | 4.9 kW | 9.2 A | 20 A C-curve | 24 V DC |
| UP-120 | 400 V 3ph + N + E, 50 Hz | 1.5 kW | 3.4 A | 10 A C-curve | 24 V DC |
| TT-240 | 400 V 3ph + N + E, 50 Hz | 1.5 kW | 3.4 A | 10 A C-curve | 24 V DC |
| TL-260 | 400 V 3ph + N + E, 50 Hz | 2.2 kW | 4.8 A | 16 A C-curve | 24 V DC |

All four are fed from distribution board DB-2 in the plant room. Each has a lockable
rotary isolator within 2 m of the operating position and in line of sight of it.
Earth continuity and insulation resistance are tested annually under 10.5. Safety
relays are dual-channel and self-monitoring and must not be replaced with a general
purpose relay.

### 3.6 Combined services — all four machines

| Service | LP-580 | UP-120 | TT-240 | TL-260 | **Line total** |
|---|---|---|---|---|---|
| Steam, peak (kg/h) | 118 | 46 | 38 | 44 | **246** |
| Steam, average (kg/h) | 62 | 22 | 19 | 24 | **127** |
| Condensate, peak (kg/h) | 118 | 46 | 38 | 44 | **246** |
| Air at rated output (m³/h) | 20.4 | 8.6 | 7.8 | 9.3 | **46.1** |
| Vacuum motor (kW) | 1.5 | 0.75 | 0.75 | 1.1 | **4.10** |
| Connected electrical load (kW) | 4.9 | 1.5 | 1.5 | 2.2 | **10.1** |
| Full load current (A) | 9.2 | 3.4 | 3.4 | 4.8 | **20.8** |
| Mass (kg) | 1,180 | 420 | 510 | 640 | **2,750** |
| Floor area (m²) | 4.6 | 1.4 | 1.7 | 2.1 | **9.8** |
| Heat rejected to the room (kW) | 4.6 | 1.9 | 1.4 | 1.6 | **9.5** |

**NOTE** — The steam peak of 246 kg/h assumes all four machines demanding at once,
which happens for a few seconds at a time. A boiler sized on the average figure of
127 kg/h plus the rest of the plant will hold the line, provided the header has
sufficient volume to absorb the peak. A boiler that is adequate on paper but short of
header volume shows up as SU-01 on the shirt unit during the first hour of the day
and at no other time.

The press room requires mechanical ventilation of not less than 10 air changes per
hour to keep the operating position below 30 °C in summer with 9.5 kW of rejected
heat.

---

## 4. Specification tables

### 4.1 LP-580 shirt unit

| Item | Specification |
|---|---|
| Type | Three-station shirt unit: collar/cuff press, steam-air body former, twin sleeve press |
| Overall dimensions (W × D × H) | 2,180 × 2,110 × 2,060 mm |
| Operating footprint including operator | 3,400 × 2,800 mm |
| Mass, empty | 1,180 kg |
| Mass, in operation | 1,215 kg |
| Collar/cuff buck | 760 × 180 mm heated plate |
| Cuff bars | 2 × 240 × 90 mm |
| Body former, chest width range | 380–560 mm |
| Body former, length | 840 mm shoulder to hem clamp |
| Former inflation pressure range | 6–20 kPa in 8 steps |
| Sleeve pads | 2 × 700 × 210 mm |
| Size settings | 4 (S, M, L, XL) — see 5.5 |
| Fabric programmes | 5 (A to E) — see 5.7 |
| Steam consumption, peak | 118 kg/h |
| Steam working pressure | 550–620 kPa g |
| Air consumption | 340 L free air per shirt |
| Air working pressure | 620 kPa |
| Vacuum | 42 L/s at 2.6 kPa, 1.5 kW blower |
| Electrical | 400 V 3ph 50 Hz, 4.9 kW, 9.2 A |
| Collar plate temperature | 175–185 °C |
| Cuff bar temperature | 170–180 °C |
| Body former skin temperature | 105–112 °C during steam |
| Collar clamp force | 9.5 kN |
| Sleeve pad force | 7.2 kN |
| Nominal cycle time | 42 s |
| Rated throughput | 65 shirts/h |
| Realistic sustained throughput | 52–58 shirts/h, one operator |
| Noise at operating position | 78 dB(A) |

### 4.2 UP-120 utility press

| Item | Specification |
|---|---|
| Type | Steam-heated utility press, interchangeable mushroom and rectangular buck, two-hand initiated |
| Overall dimensions (W × D × H) | 1,320 × 980 × 1,540 mm |
| Operating footprint including operator | 2,300 × 1,900 mm |
| Mass, empty | 420 kg |
| Rectangular buck | 1,100 × 330 mm |
| Mushroom buck | 620 × 300 mm, crowned 40 mm |
| Head face area | 0.34 m² |
| Closing force | 26 kN at 620 kPa |
| Head travel | 320 mm |
| Head closing time | 0.9 s |
| Palm button spacing | 620 mm |
| Steam consumption, peak | 46 kg/h |
| Steam working pressure | 550–620 kPa g |
| Air consumption | 95 L free air per press |
| Vacuum | 26 L/s at 2.1 kPa, 0.75 kW blower |
| Electrical | 400 V 3ph 50 Hz, 1.5 kW, 3.4 A |
| Head temperature | 160–170 °C |
| Buck temperature under cover | 118–124 °C |
| Fabric classes | 6 — see 6.4 |
| Cycle time | 12–35 s depending on class |
| Rated throughput | 90 presses/h |
| Noise at operating position | 74 dB(A) |

### 4.3 TT-240 trouser topper

| Item | Specification |
|---|---|
| Type | Trouser topper, expanding waist clamp, seat and fly plates, twin vacuum |
| Overall dimensions (W × D × H) | 1,180 × 1,440 × 1,980 mm |
| Operating footprint including operator | 2,200 × 2,400 mm |
| Mass, empty | 510 kg |
| Waist expansion range | 700–1,250 mm in 50 mm steps |
| Seat plate | 480 × 420 mm |
| Fly plate | 260 × 180 mm |
| Waist clamp force | 1.8–4.4 kN in 4 settings |
| Seat and fly clamp force | 2.1 kN |
| Palm button spacing | 540 mm |
| Steam consumption, peak | 38 kg/h |
| Steam working pressure | 520–620 kPa g |
| Air consumption | 130 L free air per cycle |
| Vacuum | 28 L/s at 2.2 kPa, 0.75 kW blower |
| Electrical | 400 V 3ph 50 Hz, 1.5 kW, 3.4 A |
| Plate temperature | 130–140 °C |
| Cycle time | 25 s standard, 34 s wool programme |
| Rated throughput | 85 pairs/h topping only |
| Noise at operating position | 76 dB(A) |

### 4.4 TL-260 trouser legger

| Item | Specification |
|---|---|
| Type | Trouser legger, dual-leg heated buck, automatic clamp and crease sequence |
| Overall dimensions (W × D × H) | 1,640 × 1,280 × 1,520 mm |
| Operating footprint including operator | 2,600 × 2,200 mm |
| Mass, empty | 640 kg |
| Leg buck faces | 2 × 1,150 × 260 mm |
| Maximum inside leg | 920 mm |
| Minimum inside leg | 520 mm |
| Leg clamp force | 2.8–6.8 kN in 4 settings |
| Clamp closing time | 1.1 s |
| Palm button spacing | 540 mm |
| Steam consumption, peak | 44 kg/h |
| Steam working pressure | 520–620 kPa g |
| Air consumption | 155 L free air per cycle |
| Vacuum | 34 L/s at 2.4 kPa, 1.1 kW blower |
| Electrical | 400 V 3ph 50 Hz, 2.2 kW, 4.8 A |
| Buck face temperature | 140–150 °C |
| Cycle time | 32 s standard, 40 s wool programme |
| Rated throughput | 70 pairs/h legging only |
| Combined TT-240 + TL-260 throughput | 40–46 finished pairs/h, one operator |
| Noise at operating position | 77 dB(A) |

---

## 5. LP-580 shirt unit

### 5.1 Description

The LP-580 finishes a laundered shirt in three stations worked in sequence by one
operator.

**Collar/cuff press.** A heated lower plate 760 × 180 mm with a hinged clamp bar and
two cuff bars either side. The collar is laid face down on the plate, the clamp bar
closes at 9.5 kN, and steam is injected through the plate for the programmed time
before the vacuum draws the moisture out. Collar and both cuffs are done in the one
closure. The plate carries a button clearance channel along its front edge so that
collar buttons and stays sit below the clamp line.

**Body former.** A perforated stainless former with an inflatable skin, mounted on a
column, with an adjustable chest width, an adjustable shoulder yoke, a hem clamp at
the bottom and a placket clamp at the front. The shirt is dressed onto the former,
the clamps close, steam is admitted through the skin, the former inflates against the
shirt to take the wrinkles out, and vacuum then pulls the shirt dry against the form.
The body former does not press by contact. It finishes by tension, steam and airflow,
which is why it leaves no seam impression and why a worn skin degrades the finish
long before it looks worn out.

**Twin sleeve press.** Two flat heated pads 700 × 210 mm, one per sleeve, operating
together. Sleeves are laid on the lower pads, the upper pads close at 7.2 kN, and
steam and vacuum follow.

The stations are interlocked so that the body former cycle and the sleeve cycle can
overlap. The collar/cuff station is independent. With practice the operator loads the
next collar while the previous body is finishing, which is where the difference
between 40 shirts an hour and 58 shirts an hour comes from.

### 5.2 Control panel

| Control | Function |
|---|---|
| SIZE | Selects size setting 1 to 4 (see 5.5) |
| FABRIC | Selects fabric programme A to E (see 5.7) |
| STEAM | Trims steam time ±3 s from the programme value |
| VACUUM | Trims vacuum time ±4 s from the programme value |
| TENSION | Sets former inflation pressure, 8 steps |
| CYCLE START | Initiates the loaded station |
| CYCLE STOP | Completes the current step and returns to open |
| RESET | Clears a latched fault after the cause is removed |
| E-STOP | See 2.6 |
| VENT | Vents the sleeve press air circuit — emergency release, see 2.7 |
| Display | Four-digit: cycle step, steam pressure, fault codes |

### 5.3 Condition of the shirt before it reaches the machine

The LP-580 finishes; it does not dry. A shirt presented at the wrong moisture level
will not finish and no adjustment on the panel will fix it.

| Condition | Residual moisture | Result |
|---|---|---|
| Correct | 12–18% of dry weight | Clean finish, no re-press |
| Too dry | below 8% | Set creases will not lift; collar puckers; shirt feels harsh |
| Too wet | above 25% | Damp across the back and under the arms; water spotting; cycle time doubles |
| Uneven | dry hem, wet yoke | Yoke finishes and hem does not, or the reverse |

Shirts come off the washers and are conditioned in the dryers to a damp state, then
held on a covered trolley. Shirts left uncovered on a trolley for more than 30 minutes
in summer will dry past the point where they finish well. Shirts held overnight must
be re-conditioned, not sprayed — spraying wets the surface and leaves the core dry,
which produces exactly the uneven result in the table above.

### 5.4 Loading a shirt correctly

Collar and cuffs first, then body, then sleeves.

**Collar and cuffs**

1. Unbutton the collar, the cuffs and the top two placket buttons.
2. Lay the collar face down on the heated plate, points towards you, with the collar
   **band** flat against the front edge stop. The band registers against the stop, not
   the collar leaf.
3. Smooth the leaf outward from the centre with the flat of the hand. Wrinkles at
   this stage become permanent creases.
4. Lay one cuff on each cuff bar, face down, buttonhole edge to the outer stop, flat
   and untwisted. Check that no cuff button is under the bar.
5. Check the collar for a folded point, a rolled band, a collar stay left in, and a
   trapped label.
6. Step back, place both hands on the palm buttons and initiate.

**Body**

1. Take the shirt by the shoulders and dress it onto the former, yoke seam sitting on
   the shoulder pads, not forward of them.
2. Close the placket. On a business shirt, button the second, fourth and sixth
   buttons. Do not button the collar.
3. Pull the hem down evenly and set it in the hem clamp. The shirt must be under
   light tension, not stretched.
4. Square the placket against the front guide and set the placket clamp.
5. Check the back for a rucked yoke, a twisted side seam, and a pocket folded under.
6. Initiate.

**Sleeves**

1. Lay each sleeve on its pad, seam down and straight, cuff to the outer stop.
2. Smooth from the shoulder outwards. Make sure the underarm seam is not rolled.
3. Check for a trapped cuff button and a folded sleeve placket.
4. Initiate.

**WARNING** — Once any station is initiated, do not reach in. See 2.10.

### 5.5 The four size settings

The SIZE control positions the shoulder pads, sets the chest width limit and sets the
hem clamp height. It does not change temperatures or times.

| Setting | Label | Chest width | Collar size served | Body length |
|---|---|---|---|---|
| 1 | S | 380–425 mm | 36–38 cm | 720 mm |
| 2 | M | 425–475 mm | 39–41 cm | 770 mm |
| 3 | L | 475–520 mm | 42–44 cm | 815 mm |
| 4 | XL | 520–560 mm | 45–48 cm | 840 mm |

Rules of thumb:

- Set to the shirt, not to the last shirt. Two-thirds of poor body finishes on this
  machine are a size setting left where the previous operator had it.
- If the shirt is between settings, go **down** one and add tension. An over-expanded
  former marks the side seams and stretches the placket.
- A slim-fit shirt of a given collar size sits one setting below a classic-fit shirt
  of the same collar size.
- Ladies' blouses with a shaped waist rarely finish well on settings 3 and 4. Use
  setting 2 with reduced tension, or finish on the Trevil form finisher.
- A shirt that will not reach the hem clamp on the correct setting is a short shirt,
  not a small shirt. Reduce the body length with the hem clamp height adjuster rather
  than dropping a size.

### 5.6 Tension and clamp adjustment

**Former tension.** Eight steps on the TENSION control, corresponding to former
inflation pressures from 6 kPa at step 1 to 20 kPa at step 8 in 2 kPa increments.

| Step | Pressure | Use |
|---|---|---|
| 1–2 | 6–8 kPa | Fine cotton lawn, silk blends, sheer blouses |
| 3–4 | 10–12 kPa | Standard poplin business shirt |
| 5–6 | 14–16 kPa | Oxford, twill, heavy cotton |
| 7–8 | 18–20 kPa | Heavy oxford, cotton drill, work shirts |

Too little tension leaves wrinkles across the back and around the armhole. Too much
tension marks the side seams, produces a shine on the shoulder, and on a worn shirt
will burst a seam. If seams are marking at step 4 on a standard poplin, the former
skin is stretched and due for replacement — do not simply turn the tension down.

**Collar clamp bar.** Adjusted by the two knurled nuts at each end of the bar, one
full turn equalling 0.4 mm of clamp gap. Set so that a 0.3 mm feeler gauge just drags
along the whole length of the bar with the clamp closed cold. Uneven clamp is the
usual cause of a collar pressed sharp at one point and soft at the other.

**Cuff bars.** Same adjustment, set to 0.4 mm cold to allow for a double cuff.

**Hem and placket clamps.** Spring loaded, no adjustment other than height. If a hem
clamp will not hold a shirt, the clamp facings are glazed and are replaced as a pair
(SK-580-CLF-3).

**Shoulder yoke.** Adjusted by the two M6 socket screws under the shoulder pads,
±15 mm. Set so the yoke seam of a correctly sized shirt sits centrally on the pad.

**TECHNICIAN** — The sleeve pad parallelism is set at commissioning and is not an
operator adjustment. A sleeve pad that closes at one end first will crease every
sleeve in the same place and must be reset by a technician.

### 5.7 Steam and vacuum timing parameters

Programme values, all times in seconds:

| Prog | Fabric | Collar steam | Collar vac | Body steam | Body vac | Sleeve steam | Sleeve vac | Tension |
|---|---|---|---|---|---|---|---|---|
| A | Poplin, standard business shirt | 3.0 | 5.0 | 4.0 | 12.0 | 3.0 | 6.0 | 4 |
| B | Non-iron / easy-care finish | 2.0 | 6.0 | 2.5 | 14.0 | 2.0 | 7.0 | 3 |
| C | Oxford, twill, heavy cotton | 4.0 | 6.0 | 6.0 | 14.0 | 4.5 | 7.0 | 6 |
| D | Fine cotton, silk blend, blouse | 2.0 | 4.0 | 2.5 | 10.0 | 2.0 | 5.0 | 2 |
| E | Cotton drill, work shirt | 5.0 | 7.0 | 7.0 | 16.0 | 5.5 | 8.0 | 8 |

The STEAM and VACUUM controls trim these by ±3 s and ±4 s respectively. Trims are not
stored and reset to programme values at the next power-up. If a trim is needed on
every shirt of a given type, ask the supervisor to have the programme value changed
rather than trimming by hand all day.

**NOTE** — Vacuum time is almost always the fix, not steam time. A shirt that comes
off damp needs more vacuum. A shirt that comes off with wrinkles still in it needs
more steam. Operators reflexively add steam to a damp shirt, which makes it wetter.

### 5.8 The standard cycle, step by step

Programme A, standard business shirt.

| Step | Station | Action | Time |
|---|---|---|---|
| 1 | Collar/cuff | Operator loads collar and cuffs, checks, initiates on two-hand control | — |
| 2 | Collar/cuff | Clamp bar closes at 9.5 kN; clamp-closed proximity switch confirms | 0.7 s |
| 3 | Collar/cuff | Steam injected through the plate | 3.0 s |
| 4 | Collar/cuff | Vacuum draws through the plate, moisture removed | 5.0 s |
| 5 | Collar/cuff | Clamp opens; operator removes and dresses the shirt onto the former | 1.0 s |
| 6 | Body | Operator sets hem and placket clamps, checks, initiates | — |
| 7 | Body | Clamps close, interlock confirms, former begins to inflate | 1.5 s |
| 8 | Body | Steam admitted through the former skin, former at set tension | 4.0 s |
| 9 | Body | Steam off, former holds tension, vacuum draws through the perforations | 12.0 s |
| 10 | Body | Former deflates to 30% and holds; clamps release | 2.0 s |
| 11 | Sleeve | Operator lays sleeves, checks, initiates — may overlap step 9 | — |
| 12 | Sleeve | Upper pads close at 7.2 kN | 0.8 s |
| 13 | Sleeve | Steam through the lower pads | 3.0 s |
| 14 | Sleeve | Vacuum through the lower pads | 6.0 s |
| 15 | Sleeve | Pads open | 0.8 s |
| 16 | — | Operator removes the shirt to a hanger, inspects, hangs | — |

Nominal machine time 42 s. With overlap, the limiting factor is the operator, not the
machine.

### 5.9 Adjusting for the garment

**Heavier fabric.** Move up a programme (A to C, C to E) rather than trimming. Heavier
cloth needs more steam **and** more vacuum, and more tension. Trimming steam alone on
a heavy shirt produces a shirt that is wrinkle-free and damp.

**Fused collar.** A fused collar has an adhesive interlining. Excess steam migrates
into the fusing and produces bubbling or delamination that shows as a rippled collar
leaf, and it is not recoverable. Use programme B collar values (2.0 s steam) even if
the body is being run on A or C, and increase collar vacuum to 6.0 s. Never run a
fused collar on programme E. If a collar has already bubbled, it was fused with a
marginal adhesive and it will bubble again; tell the customer before it goes back
through.

**Non-iron shirt.** Non-iron finishes are resin-treated. They resist creasing but
they also resist correction, and they scorch and yellow at lower temperatures than
untreated cotton. Use programme B throughout. Do not exceed 3.0 s collar steam.
Non-iron shirts benefit from longer vacuum, not more steam — the resin holds
moisture. If a non-iron shirt is coming off with a soft collar, the fault is nearly
always the collar clamp gap, not the programme.

**Heavy oxford.** Programme C, tension step 6, and expect a slower cycle. Oxford
weave holds moisture in the basket structure. Add 2.0 s to body vacuum on the first
shirt of a batch and see whether it comes off dry; if it does, leave it there for the
batch. Oxford at tension step 4 will come off with armhole wrinkles that look like a
steam fault and are not.

**Dark shirts.** Any dark shirt on programme C or E is at risk of shine on the
shoulder and the collar. Drop one tension step and accept a slightly softer finish.
See Section 8.

**Double cuffs.** Set the cuff bar gap to 0.4 mm and lay the cuff open, not folded.
A folded double cuff under the bar is the most common cause of SU-14.

### 5.10 Shirts with a stain still in them

**Do not press a stained shirt.** Heat sets a stain. A stain that would have come out
at the spotting board on a second attempt becomes permanent the moment it goes
through the collar plate at 180 °C or the body former at 110 °C.

1. Inspect every shirt as it comes out of the conditioning trolley — front and back,
   collar, cuffs, placket and underarm. This takes about two seconds a shirt and it is
   not optional.
2. If a mark is present, put the shirt on the reject rail. Do not press it "and see".
3. Tag it with the ticket number and what you can see: location, colour, whether it
   is greasy to the touch, whether it has a ring.
4. Return it to the spotting board for a second treatment and a rewash.
5. If the mark has already been treated twice and remains, it goes to the counter
   with a stain tag, not through the press.

Marks that are commonly missed and commonly set: collar sebum on white shirts, which
shows as a yellow-grey band after pressing; deodorant build-up in the underarm, which
shows as a stiff white patch; ballpoint on a pocket edge; and blood on a cuff. The
underarm one matters most — aluminium salts from antiperspirant react under heat and
the resulting yellowing is permanent.

### 5.11 Throughput and what slows it

| Condition | Shirts per hour |
|---|---|
| Machine rated | 65 |
| Experienced operator, mixed batch, sorted | 52–58 |
| Experienced operator, unsorted batch | 40–46 |
| New operator, first month | 28–36 |
| Any operator, shirts conditioned too dry | 30–38 |

At 600 shirts a week the line needs about 11 machine hours a week, typically spread
as two to three hours a day. What actually slows a shirt run:

- **Unsorted batches.** Changing size setting and programme every shirt costs eight
  to twelve seconds each time. Sorting the trolley by size and fabric before starting
  recovers more time than any adjustment on the machine.
- **Shirts conditioned too dry**, which forces a second pass. See 5.3.
- **Re-presses.** Every redone shirt is a shirt not done. Loading properly the first
  time is faster than loading quickly.
- **Waiting on steam.** Low header pressure in the first hour, see 3.1.
- **A worn former skin**, which needs higher tension and longer vacuum for the same
  result and adds four to six seconds a shirt.
- **Hanging and bagging at the machine.** Have the hanger ready before the body cycle
  finishes.
- **Stopping to clear jams** caused by collar stays and cuff buttons that should have
  been found at the loading check.

---

## 6. UP-120 utility press

### 6.1 Description

The UP-120 is a steam-heated utility press with a fixed lower buck and a
pneumatically driven upper head, initiated by a two-hand control. It is the
general-purpose press on the line and it does the work the shaped machines cannot:
jackets, skirts, the final touch on trousers, and anything odd.

Two bucks are supplied and are interchangeable in about ten minutes by a supervisor.
The **rectangular** buck (1,100 × 330 mm) is used for flat work — skirt panels,
trouser finishing, sleeves, hems. The **mushroom** buck (620 × 300 mm, crowned 40 mm)
is used for shaped work — jacket shoulders, sleeve heads, collars, the seat of a
skirt. Working shaped garments on the flat buck is the most common cause of seam
impression on this line.

The head is steam heated to 160–170 °C and the buck to 118–124 °C under its cover.
Buck vacuum is drawn through the perforated buck face and is controlled by a foot
pedal independently of the head, so the operator can set a garment with vacuum before
the head is brought down and can hold it with vacuum after the head lifts. Head
pressure is set at the regulator on the right-hand side of the frame and read on the
panel gauge.

### 6.2 Head and buck padding

| Layer | Material | Thickness | Part |
|---|---|---|---|
| Head face | Needled Nomex felt | 6 mm | SK-120-PAD-H5 |
| Head cover | Silicone-treated Nomex cloth | 1 mm | SK-120-COV-H5 |
| Buck base pad | Spring steel mesh | 12 mm | SK-120-MSH-B2 |
| Buck upper pad | Needled polyester felt, perforated | 10 mm | SK-120-PAD-B5 |
| Buck cover | Cotton drill, shrink-fit | 0.8 mm | SK-120-COV-B5 |
| Mushroom buck pad | Moulded felt | 14 mm | SK-120-PAD-M5 |
| Mushroom buck cover | Cotton drill, shrink-fit | 0.8 mm | SK-120-COV-M5 |

Padding does three jobs: it spreads the closing force so the garment is not marked by
the metal, it lets steam and vacuum pass, and it absorbs the thickness of a seam so
that the seam is not pressed through to the face. A flattened pad does none of these
and produces seam impression, shine and uneven drying at the same time. See 9.3.

### 6.3 The four common uses

**Jackets.** Mushroom buck. Work the garment in sections and never press a whole
front at once. Order: back, then shoulders and sleeve heads on the crown, then
fronts, then lapels last with the head off — lapels are rolled with steam and hand
pressure, not pressed flat. Never press a jacket with the lining pulled tight;
release it and let it sit. Do not press over a shoulder pad edge; move the garment so
the pad edge sits off the crown. Finish the collar on the crown with the collar
rolled, not flattened.

**Skirts.** Rectangular buck for panels and hems; mushroom buck for the seat and for
any shaping at the hip. Pleated skirts are set pleat by pleat with the head just
kissing the cloth, not at full closure. A lined skirt is pressed from the face with
the lining hanging free. Waistbands are done last on the rectangular buck.

**Trouser finishing.** The UP-120 finishes what the TT-240 and TL-260 leave: the
waistband, the fly, the pocket bags and the top of the seat if the topper has left a
mark. Use the mushroom buck for the seat and the rectangular buck for the waistband.
Do not use the UP-120 to set a crease; that is the legger's job, and a crease set by
hand on this press will not match the machine crease.

**General.** Aprons, tablecloths, uniform shirts too large for the LP-580, overalls,
curtains and anything flat. For long flat work, press in overlapping passes of about
900 mm and move the garment between passes rather than dragging it under a closed
head.

### 6.4 Pressure and time settings by fabric class

| Class | Fabrics | Head pressure | Steam | Vacuum | Buck vacuum before close |
|---|---|---|---|---|---|
| 1 | Silk, acetate, fine viscose, chiffon | 180 kPa | 1.5 s | 6 s | Yes |
| 2 | Fine wool, worsted suiting under 240 g/m² | 260 kPa | 2.0 s | 8 s | Yes |
| 3 | Worsted suiting 240–320 g/m², wool blends | 340 kPa | 3.0 s | 8 s | Yes |
| 4 | Cotton, linen, drill, poly-cotton | 480 kPa | 4.0 s | 10 s | Optional |
| 5 | Heavy wool, tweed, coating, denim | 620 kPa | 5.0 s | 12 s | No |
| 6 | Synthetic knit, polyester, acrylic | 200 kPa | 1.0 s | 10 s | Yes |

Full closing force of 26 kN corresponds to 620 kPa; class 2 at 260 kPa gives about
11 kN. Where a garment carries two fabrics — a wool jacket with a synthetic lining,
for example — set to the lower class.

**CAUTION** — Class 6 synthetics melt. Polyester begins to glaze at 150 °C and the
head runs at 165 °C. Always use a press cloth on synthetics and never dwell.

### 6.5 Avoiding shine on worsted and on dark fabrics

Shine is flattened, polished fibre. On worsted and on dark cloth it is the single
most common complaint and, once it is severe, it is not fully recoverable.

Causes, in order of how often they are the actual cause:

1. Too much head pressure for the cloth class.
2. Pressing from the face without a press cloth.
3. A flattened or glazed head cover, which is hard and smooth instead of soft and
   matt.
4. Dwelling — leaving the head closed after the steam and vacuum have finished.
5. Pressing a dry garment. Steam is what lets the fibre move; without it the head
   simply crushes the surface.
6. Pressing over a seam, a pocket bag or a shoulder pad edge, which concentrates the
   whole force on a narrow line.

Prevention:

- Drop one pressure class from what the fabric weight suggests.
- Press from the reverse wherever the garment construction allows it.
- Where the face must be pressed, use a press cloth (6.6) without exception.
- Use steam and vacuum to do the work and use pressure only to hold the cloth still.
  On a class 2 or 3 garment the head should be firm, not hard.
- Open the head as soon as vacuum ends.
- Finish with a short steam-only pass with the head 20 mm off the cloth, then vacuum,
  to lift the surface.
- Replace the head cover on schedule. A glazed cover will shine a garment at any
  pressure setting.

Recovery of light shine: steam the area from the reverse with the head off, brush the
nap up with a soft brush while damp, and vacuum flat. Severe shine where the fibre
has been fused is permanent.

### 6.6 Using a press cloth

A press cloth is a piece of unbleached cotton or wool flannel laid between the head
and the garment. It diffuses the heat, absorbs some of the pressure, and stops the
head cover contacting the face of the cloth.

| Cloth | Material | Size | Use | Part |
|---|---|---|---|---|
| General | Unbleached cotton drill | 900 × 400 mm | Cotton, linen, synthetics | SK-GEN-PRC-1 |
| Wool | Wool flannel | 700 × 350 mm | Worsted, wool, dark suiting | SK-GEN-PRC-2 |
| Fine | Silk organza | 500 × 300 mm | Silk, acetate, fine viscose | SK-GEN-PRC-3 |

Use it dry unless the garment is bone dry, in which case dampen it evenly and never
in patches — a patchy damp cloth is the most common cause of water spotting on this
press. Keep press cloths clean; a cloth with a mark on it will transfer that mark
under heat. Wash them weekly and discard any that has gone stiff or shiny.

### 6.7 Pad and cover change procedure

**TECHNICIAN or trained supervisor. Not an operator task.**

1. Isolate steam, air and electricity under 2.8. Allow 40 minutes cooling. A head
   cover cannot be fitted correctly to a hot head in any case.
2. Release the buck cover drawstring at the underside and remove the old cover. Note
   which way the seam ran.
3. Lift out the upper felt pad and inspect the spring mesh below. Mesh that has
   collapsed anywhere across the buck is replaced at the same time.
4. Vacuum the buck face and clear every perforation. Blocked perforations after a pad
   change are the reason a freshly re-padded press sometimes dries worse than it did
   before.
5. Lay the new felt pad, perforated side matching the buck, and smooth it from the
   centre out. Do not stretch it.
6. Fit the new cover damp, pull the drawstring evenly, and work the wrinkles out from
   the centre. Tie off and tuck the cord clear of the buck edge.
7. For the head: remove the four M8 retaining clips, lift the old cover and felt off,
   clean the head face with the cleaning block, fit the new felt, then the cover, and
   re-clip. The cover must be taut with no wrinkle at the nose of the head.
8. Restore services, run three empty cycles at class 4 settings to shrink and set the
   covers, then press a scrap garment and check for wrinkle transfer.
9. Record the change in Appendix C.

### 6.8 Changing between bucks

**Supervisor task.** Isolate under 2.8 and allow the buck to cool. Disconnect the buck
steam union and the vacuum spigot, remove the four M10 buck retaining bolts, lift the
buck clear with two people, seat the replacement on its gasket, refit and torque the
bolts to 45 Nm, reconnect the union and spigot, restore services and check for leaks
at working pressure before the first garment. Do not use a buck whose gasket has been
disturbed more than three times; order a new gasket set with the change.

---

## 7. TT-240 trouser topper and TL-260 legger

### 7.1 Description

The two machines finish a pair of trousers between them. The **TT-240** finishes the
top: waistband, seat, fly, pleats and the top 300 mm of each leg. The **TL-260**
finishes the legs and sets the creases.

The TT-240 has an expanding waist clamp that opens from 700 mm to 1,250 mm, a heated
seat plate 480 × 420 mm, a fly plate, and twin vacuum. The trousers are dressed
waist-down over the form, the waist clamp expands to take up the slack, steam is
admitted, and vacuum sets the finish. There is no contact pressing on the seat except
where the seat plate closes.

The TL-260 has two heated leg bucks 1,150 × 260 mm and an automatic clamp sequence.
The legs are laid on the bucks with the creases aligned, the clamps close at up to
6.8 kN, steam and vacuum follow, and the crease is set by the clamp line falling
exactly on the fold.

Worked as a pair by one operator, the two machines produce 40–46 finished pairs an
hour. Topping is faster than legging, so the operator tops two pairs while the legger
runs one.

### 7.2 Crease-setting sequence

1. Turn the trousers right side out and check the pockets are empty and flat.
2. **Top first.** Dress onto the TT-240, waist over the form, fly to the front guide,
   back seam centred on the seat plate. Close the waist clamp on the two-hand control.
   Run the cycle. Remove.
3. **Match the legs.** Hold the trousers by the waistband, let them hang, and bring
   the inside leg seams together. The trousers will settle into their own creases. Do
   not force a new crease line.
4. **Lay the front leg.** Place the front of both legs on the TL-260 bucks, front
   crease running down the centre of each buck, cuff or hem to the end stop.
5. Check that the fly is flat, that the pocket bags are not folded under, and that
   the crease is straight for the whole length. A crease that wanders here will be set
   where it wanders.
6. Initiate. Clamps close, steam 6 s, vacuum 14 s, clamps open.
7. **Turn and repeat for the back.** Same alignment, back crease centred.
8. Hang immediately on a clamp hanger. A pair left folded over a rail while warm will
   take a second crease from the rail.

### 7.3 Clamp settings

| Setting | TT-240 waist clamp | TL-260 leg clamp | Use |
|---|---|---|---|
| 1 | 1.8 kN | 2.8 kN | Silk, fine viscose, unlined summer trousers |
| 2 | 2.6 kN | 4.0 kN | Fine worsted, tropical weight wool |
| 3 | 3.4 kN | 5.4 kN | Standard worsted suiting, poly-wool |
| 4 | 4.4 kN | 6.8 kN | Cotton drill, moleskin, heavy wool, denim |

Waist clamp expansion is set by the WAIST control in 50 mm steps. Set it to the
garment before dressing, not after; expanding a clamp against a fastened waistband
will pop a button or split a seam.

### 7.4 Setting a crease on a cuffed trouser

A turn-up changes where the crease stops and how the hem is handled.

1. Do not press the crease through the turn-up. The crease stops at the top edge of
   the turn-up, and the turn-up itself is pressed flat and square.
2. Set the TL-260 hem stop to the top of the turn-up, not to the bottom of the
   trouser, using the sliding stop on each buck.
3. Press the leg as normal. The turn-up hangs past the clamp line.
4. Finish the turn-up on the UP-120 rectangular buck at one class below the leg
   setting, with the turn-up opened flat and the fold pressed only at the outer edge.
5. Re-fold the turn-up, check both legs are the same length by laying them together,
   and give it a two-second set with the head kissing the fold.

Unequal turn-ups are the most common complaint on cuffed trousers and are almost
always caused by pressing them separately rather than together.

### 7.5 Handling pleats

- Identify the pleat type before you start. A **forward pleat** folds towards the
  fly, a **reverse pleat** away from it. Setting a pleat the wrong way round is not
  recoverable in one press; the old fold shows.
- On the TT-240, set each pleat by hand on the form before closing the waist clamp,
  and hold it with the pleat pins provided (SK-240-PIN-2).
- Do not press a pleat below the point where the manufacturer's original press
  stopped, usually 150–200 mm below the waistband. A pleat carried too far down reads
  as a crease in the wrong place.
- Double pleats are set outer first, then inner.
- On unlined trousers, check the pocket bag is not caught in the pleat fold.

### 7.6 Permanent press versus wool

| Property | Permanent press / poly blend | Wool and worsted |
|---|---|---|
| Programme | Standard, 25 s TT / 32 s TL | Wool, 34 s TT / 40 s TL |
| Clamp setting | 3 | 2 or 3 |
| Steam | Short, 3 s | Longer, 6 s |
| Vacuum | Long, 14–16 s | Long, 16 s, and let it cool on the buck |
| Temperature limit | 150 °C — resin scorches and yellows | 160 °C |
| Crease durability | Very high; an old crease is hard to remove | Moderate; sets and resets readily |
| Main risk | Glazing and shine at the crease | Shrinkage and seam impression |

Wool must be allowed to cool under vacuum before it comes off the buck. Wool sets its
shape as it cools, not while it is hot. A pair taken off warm will drop its crease
within a day, and the customer will report that the crease "didn't last". The wool
programme's longer vacuum exists for exactly this reason and must not be trimmed to
speed the line up.

Permanent press trousers hold whatever crease is put into them, including a wrong
one. Check the alignment twice before initiating on a poly blend.

### 7.7 Common finishing faults on the topper and legger

| Fault | Cause | Correction |
|---|---|---|
| Double crease down the leg | Legs not matched to the original crease before laying; or the pair re-legged after being folded warm | Damp out the old crease, cool, re-lay and re-press |
| Crease off-centre at the cuff | Hem not to the end stop; one leg pulled longer than the other | Re-lay both legs together to the stop |
| Waistband marked or ridged | Waist clamp setting too high, or waistband not seated flat on the form | Drop a setting; reseat and re-run |
| Seat shine | Seat plate pressure too high on worsted | Press from the reverse or drop a clamp setting; see 6.5 for recovery |
| Pocket bag impression on the front | Pocket bag folded under | Smooth pockets before dressing; re-steam and re-press |
| Crease fades within a day | Wool taken off the buck warm | Extend vacuum; let it cool on the buck |
| Fly puckering | Fly plate closing on a fly that is not fully done up and flat | Do the fly up, flatten, re-run |
| Leg wrinkled behind the knee | Leg not pulled straight along the buck before clamping | Re-lay and re-press |
| Shine at the crease on poly blend | Clamp setting 4 on permanent press | Drop to setting 3; light shine may lift with steam from the reverse |

---

## 8. Finishing quality faults

This is the section to use when a garment comes back. Identify the fault by what it
looks like, not by what the customer says caused it. Where a fault is recoverable,
recover it before the garment goes back to the counter, and record the cause so the
same fault does not go out again the same week.

| Fault | What it looks like | Cause | Prevention | Recoverable? |
|---|---|---|---|---|
| **Shine** | Polished, flattened, lighter-looking patch — worst on shoulders, seat, elbows, lapels and dark worsted | Too much pressure for the class; no press cloth; glazed head cover; dwelling; pressing dry cloth; pressing over a seam or pad edge | Drop a fabric class; press from the reverse; always use a press cloth on dark worsted; replace head cover on schedule; open the head as soon as vacuum ends | Light shine usually — steam from the reverse, brush the nap up while damp, vacuum flat. Fused shine is permanent |
| **Seam impression** | Outline of a seam, pocket bag, dart or zip showing through on the face | Pad flattened or too thin; flat buck used for shaped work; too much pressure | Renew buck padding on schedule; mushroom buck for shaped work; seam roll or hand press for thick seams | Usually — re-steam from the reverse and re-press on soft padding without closing on the seam line |
| **Double crease** | Two parallel creases in a trouser leg or a sleeve | Garment re-pressed without removing the first crease; legs not matched; garment folded while warm | Match legs to the original crease before laying; hang immediately; damp down and remove an old crease before setting a new one | Usually — damp the area, steam the old crease out with the head off, allow to cool, then re-press. Permanent press blends may not fully release |
| **Water spotting** | Ring-shaped or irregular pale marks, sometimes with a darker edge, on silk, acetate, viscose and some wools | Condensate spitting from a head or hose; a patchily damp press cloth; steaming a garment that is already too wet; a failed trap letting water into the header | Blow the head through before the first press of the day; test traps quarterly; damp press cloths evenly; check the separator | Sometimes — feather out with steam from the reverse and dry evenly, or return to the wet side. Acetate spotting is often permanent |
| **Scorch** | Yellow, tan or brown discolouration in the shape of the head or buck; the fibre feels crisp | Head or plate temperature too high for the fibre; dwelling; a synthetic pressed without a press cloth; a resin-finished shirt run on a cotton programme | Match the programme to the fibre; never dwell; press cloth on all synthetics and non-iron; verify plate temperatures monthly | No. Light yellowing on cotton sometimes lifts with a bleach bath at the wet side; anything that has changed the fibre is permanent |
| **Flattened nap** | Velvet, corduroy, moleskin or brushed wool looks crushed and shows the direction of the press | Any contact pressing on a napped cloth | Never press a napped fabric on the UP-120. Finish on the Trevil steam-air finisher, or steam with the head off and brush | Often — steam from the reverse with no contact and brush the pile up while damp |
| **Pressed-in stain** | A mark that was there before, now darker, sharper-edged and immovable | The garment went to the press with a stain in it. Heat set it | Inspect every garment before it reaches a press. Stained garments go to the reject rail, not through the machine. See 5.10 | Rarely. Protein and sugar stains set hard under heat. Tell the counter before it goes back |
| **Collar puckering** | The collar leaf ripples along the seam, or the fusing bubbles | Fused collar over-steamed; uneven collar clamp gap; leaf not smoothed flat before clamping; wet steam from low header pressure | Programme B collar values on fused collars; clamp gap set to 0.3 mm; smooth the leaf before clamping; keep header pressure up | Bubbled fusing, no. Simple puckering, yes — re-damp and re-press with less steam and a longer vacuum |
| **Colour change under heat** | A patch a different shade from the rest, often on a dark garment, sometimes visible only in daylight | Heat-sensitive dye — acetate, some reactive dyes, cheap dark cottons; excessive plate temperature; steam and pressure together on a marginal dye | Test an inside seam on any unfamiliar dark garment; drop a class; use a press cloth; keep plate temperatures at the low end of the range | No. This is a dye and fibre change, not a surface effect |
| **Glazing at the crease** | The crease line looks shiny and hard on a poly blend | Permanent press cloth pressed too hot with too much clamp force | Clamp setting 3 maximum on permanent press; keep the TL-260 buck at the low end of 140–150 °C | Rarely — light glazing may lift with steam from the reverse |
| **Damp garment at the hanger** | Feels cool and heavy; creases within an hour in the bag | Vacuum time too short; blocked lint filter; blocked buck perforations; failed steam trap | Extend vacuum before extending steam; clean lint filters weekly; clear perforations at every pad change | Yes — re-run a vacuum-only cycle |
| **Cracked or melted buttons** | Chipped, clouded or flattened buttons, mostly on shirts | Button pressed directly under a head or a clamp bar | Position buttons off the clamp line; check cuffs before closing the cuff bars; use the button clearance channel on the collar plate | No. Replace the button |
| **Lining pulled and rippled** | Jacket or skirt lining shows drag lines and does not sit flat | Pressed with the lining under tension, or pressed through the lining from the face | Release the lining and let it sit before pressing; press the shell from the reverse | Usually — re-steam the lining with the head off and let it hang |
| **Shrinkage on wool** | Garment measurably shorter or tighter, felted handle | Too much steam with too much pressure, or repeated re-pressing of a wet wool garment | Wool programme; let the garment cool under vacuum; do not re-press wet wool repeatedly | No |

---

## 9. Padding, covers and consumables

### 9.1 Consumables by machine

| Machine | Item | Part | Change interval | Recommended stock |
|---|---|---|---|---|
| LP-580 | Body former skin | SK-580-SKN-5 | 12 months or 30,000 shirts | 1 |
| LP-580 | Shoulder pad pair | SK-580-SHP-3 | 18 months | 1 pair |
| LP-580 | Collar plate cover | SK-580-COV-C5 | 3 months | 4 |
| LP-580 | Cuff bar cover pair | SK-580-COV-F5 | 3 months | 4 pair |
| LP-580 | Sleeve pad felt pair | SK-580-PAD-S5 | 9 months | 1 pair |
| LP-580 | Sleeve pad cover pair | SK-580-COV-S5 | 3 months | 4 pair |
| LP-580 | Hem clamp facing pair | SK-580-CLF-3 | 12 months | 1 pair |
| LP-580 | Vacuum lint filter | SK-580-FLT-1 | Clean weekly, replace 6 months | 2 |
| UP-120 | Head felt | SK-120-PAD-H5 | 12 months | 1 |
| UP-120 | Head cover | SK-120-COV-H5 | 4 months | 3 |
| UP-120 | Buck felt | SK-120-PAD-B5 | 12 months | 1 |
| UP-120 | Buck cover | SK-120-COV-B5 | 3 months | 4 |
| UP-120 | Buck spring mesh | SK-120-MSH-B2 | 3 years | 0 |
| UP-120 | Mushroom pad / cover | SK-120-PAD-M5 / COV-M5 | 12 / 4 months | 1 / 3 |
| UP-120 | Buck gasket set | SK-120-GSK-2 | On buck change | 1 |
| UP-120 | Vacuum lint filter | SK-120-FLT-1 | Clean weekly, replace 6 months | 2 |
| TT-240 | Waist form cover | SK-240-COV-W5 | 4 months | 3 |
| TT-240 | Seat plate pad / cover | SK-240-PAD-S5 / COV-S5 | 12 / 4 months | 1 / 3 |
| TT-240 | Fly plate cover | SK-240-COV-F5 | 6 months | 2 |
| TT-240 | Pleat pin set | SK-240-PIN-2 | As required | 2 sets |
| TT-240 | Clamp cylinder seal kit | SK-240-SEA-1 | 12 months | 1 |
| TT-240 | Vacuum lint filter | SK-240-FLT-1 | Clean weekly, replace 6 months | 2 |
| TL-260 | Leg buck felt pair | SK-260-PAD-L5 | 12 months | 1 pair |
| TL-260 | Leg buck cover pair | SK-260-COV-L5 | 3 months | 4 pair |
| TL-260 | Clamp facing pair | SK-260-CLF-4 | 18 months | 1 pair |
| TL-260 | Clamp cylinder seal kit | SK-260-SEA-1 | 12 months | 1 |
| TL-260 | Vacuum lint filter | SK-260-FLT-1 | Clean weekly, replace 6 months | 2 |
| Line | Steam hose, braided PTFE, 900 mm | SK-GEN-HSE-9 | 3 years or on inspection | 2 |
| Line | Y-strainer screen, 800 micron | SK-GEN-STR-8 | 12 months | 4 |
| Line | FRL filter element | SK-GEN-FRL-3 | 6 months | 4 |
| Line | Press cloths | SK-GEN-PRC-1 / 2 / 3 | On wear | 3 each |
| Line | Head cleaning block | SK-GEN-CLN-1 | On wear | 2 |
| Line | Hooked jam tool | SK-GEN-TOL-4 | On wear | 1 per machine |
| Line | Ball valve lockout clamp | SK-GEN-LOK-1 | — | 4 |
| Line | Heat-resistant gloves | SK-GEN-GLV-2 | 6 months | 3 pair |

### 9.2 The effect of a worn cover on finish quality

A cover is not decoration. It is the last 1 mm between a hot metal surface and the
customer's garment, and it controls three things: how heat reaches the cloth, how
steam and vacuum pass through it, and whether the garment picks up a mark.

A worn cover causes, in the order the symptoms usually appear:

1. **Slower drying**, because the fibres have matted and the cover no longer passes
   air. The operator compensates by adding vacuum time and the line slows.
2. **Shine**, because the surface has glazed hard and smooth.
3. **Uneven finish**, because the wear is never even across the buck.
4. **Marking**, because a glazed cover picks up soil from garments and transfers it.
5. **Scorch**, because heat now reaches the cloth faster than the operator expects.

### 9.3 When to change a cover or a pad

Change a **cover** when any of the following is true, regardless of the calendar: it
is shiny or slick to the touch anywhere; it has a hole, a burn, a tear or a permanent
mark; the weave of the felt shows through; a garment picks up the cover's texture; or
drying time has crept up more than 15% with no other explanation.

**Padding** lasts longer than covers but fails less obviously. Test it: press a folded
scrap of heavy cotton with a thick seam in it at class 4. If the seam shows on the
face, the pad is finished. Also change padding when the felt can be compressed to less
than half its original thickness by thumb pressure, when drying is uneven across the
buck, or when the pad has a permanent depression where garments are habitually placed.

Never fit a new cover over old, flattened padding. The cover will not sit flat, it
will wear out early, and the finish will not improve.

### 9.4 Recommended stock holding

The stock column in 9.1 assumes 600 shirts and about 400 other garments a week. The
critical items — the ones that stop the line if they are not on the shelf — are the
LP-580 collar plate cover, the UP-120 head and buck covers, the TL-260 leg buck cover
pair, and the vacuum lint filters. Keep those on the shelf at all times. The spring
mesh, the buck gasket set and the seal kits are ordered against a planned job, not
held.

---

## 10. Maintenance schedule

Times are for a competent person with the tools laid out. Daily and weekly tasks are
operator tasks. Monthly and above are supervisor or technician tasks as marked.

### 10.1 Daily — all machines, by the operator

| Task | Machine | Tool | Time |
|---|---|---|---|
| Drain the FRL bowl | All | None | 1 min |
| Check panel steam and air pressure at start-up | All | None | 1 min |
| Blow the head, plates and former through before the first garment | LP-580, UP-120 | None | 2 min |
| Wipe covers; check for marks, burns and holes | All | Cloth | 3 min |
| Empty and brush the lint screens | All | None | 3 min |
| Check E-stops are accessible and not obstructed | All | None | 1 min |
| Check guards are in place, closed and latched | All | None | 1 min |
| Visual check of steam hoses for wet spots or braid damage | All | None | 2 min |
| Check the reject rail is empty from the previous shift | Line | None | 1 min |
| Close steam and air valves at shutdown; leave heads open | All | None | 2 min |

### 10.2 Weekly

| Task | Machine | Tool | Time |
|---|---|---|---|
| Clean and refit vacuum lint filters | All | Screwdriver | 15 min |
| Clear buck perforations with a stiff brush | UP-120, TL-260 | Brush | 10 min |
| Clean the collar plate and cuff bars with the cleaning block | LP-580 | SK-GEN-CLN-1 | 10 min |
| Wash press cloths | Line | — | 5 min |
| Inspect flexible steam hoses along their whole length | All | Timber probe | 10 min |
| Check the former skin for splits, stretch and loose clamp ring | LP-580 | None | 5 min |
| Blow down the Y-strainers | All | Spanner | 10 min |
| Check the refrigerated dryer is holding dew point | Line | — | 5 min |
| Complete the weekly safety device test record | All | Appendix B | 20 min |

### 10.3 Monthly

| Task | Machine | Tool | Time | Who |
|---|---|---|---|---|
| Two-hand control function test, all three stations, all three methods | UP-120, TT-240, TL-260 | Appendix B | 20 min | Supervisor |
| Guard interlock function test, every interlock | All | Actuator, tester | 25 min | Supervisor |
| Light curtain test with the 30 mm rod at three heights | TT-240 | Test rod | 10 min | Supervisor |
| E-stop test, all seven stops plus the line master stop | All | — | 15 min | Supervisor |
| Manual release test with the machine isolated | All | Hex key | 15 min | Supervisor |
| Verify plate and head temperatures against 2.3 | All | Contact thermometer | 20 min | Supervisor |
| Check clamp forces against 7.3 | TT-240, TL-260 | Load cell | 25 min | Technician |
| Grease the body former column slide | LP-580 | Grease gun | 10 min | Technician |
| Inspect and reseat buck covers | UP-120, TL-260 | — | 20 min | Supervisor |
| Check air regulator settings against 6.4 | UP-120 | — | 5 min | Supervisor |
| Check collar clamp gap with a feeler gauge | LP-580 | 0.3 mm feeler | 10 min | Supervisor |

### 10.4 Quarterly

| Task | Machine | Tool | Time | Who |
|---|---|---|---|---|
| Steam trap test, four machine traps plus header traps | Line | Ultrasonic tester or contact pyrometer | 45 min | Technician |
| Replace FRL filter elements | All | Spanner | 25 min | Technician |
| Check and set lubricator drip rate | All | — | 15 min | Technician |
| Vacuum blower bearing check and current draw against commissioning figures | All | Clamp meter | 30 min | Technician |
| Inspect and clean steam separators | Line | Spanner | 30 min | Technician |
| Safety relay function and channel discrepancy check | All | Tester | 40 min | Technician |
| Solenoid valve operation check, steam and air | All | — | 30 min | Technician |
| Full pad condition assessment under 9.3 | All | Scrap test garment | 20 min | Supervisor |
| Check and clear vacuum exhaust ducts | All | — | 20 min | Technician |

### 10.5 Annual

| Task | Machine | Tool | Time | Who |
|---|---|---|---|---|
| Replace Y-strainer screens | Line | Spanner | 30 min | Technician |
| Earth continuity, insulation resistance and isolator function test | All | Insulation tester | 90 min | Licensed electrician |
| Replace head and buck felts due under 9.1 | All | — | 3 h | Technician |
| Replace the body former skin | LP-580 | — | 90 min | Technician |
| Rebuild or replace clamp cylinder seals | TT-240, TL-260 | Seal kit | 2 h | Technician |
| Full safety certification of two-hand controls, interlocks and E-stops, with certificate | All | Test set | 3 h | Authorised technician |
| Recalibrate steam pressure transducers | All | Test gauge | 60 min | Technician |
| Check sleeve pad parallelism and reset if required | LP-580 | Dial gauge | 45 min | Technician |
| Review programme values against the current fabric mix | All | — | 60 min | Supervisor |

### 10.6 Safety device testing — frequency and method

| Device | Frequency | Method | Pass criterion |
|---|---|---|---|
| Two-hand controls | Monthly | Press one button only and hold 3 s, then press the second | Machine does not start |
| Two-hand controls | Monthly | Press both, then release one during closing | Motion stops and reverses within 200 ms |
| Two-hand controls | Monthly | Hold both after a cycle and attempt a restart | Machine does not restart until both released |
| Guard interlocks | Monthly | Open each guard during a cycle | Motion stops; correct code displayed |
| Light curtain (TT-240) | Monthly | Interrupt with the 30 mm test rod at three heights | Motion stops and reverses; TT-04 raised |
| E-stops | Monthly | Operate each in turn during a cycle | All motion outputs de-energise; air vents |
| Line master stop | Monthly | Operate with all four machines running | All four machines stop; steam solenoid closes |
| Manual releases | Monthly | Operate each release with the machine isolated | Head or clamp releases within 5 s |
| Full certification | Annual | Authorised technician, documented | Certificate issued and filed |

Every test is recorded in Appendix B with the date, the tester and the result. A
device that fails takes the machine out of service immediately, and the machine is not
returned to service until a technician has repaired it and the test has been repeated
and passed.

### 10.7 Steam trap testing

A failed trap is the most common cause of a whole-line finishing complaint. Test each
trap with an ultrasonic tester or, failing that, with a contact pyrometer either side
of the trap.

| Symptom | Diagnosis | Action |
|---|---|---|
| Continuous discharge, no cycling | Trap blown open | Replace. It is dumping live steam and pressurising the common return |
| Cold both sides | Trap blocked closed | Clear the strainer, then replace if it stays cold |
| Inlet hot, outlet cold, cycling every 20–60 s | Normal | None |
| Return line hotter than 100 °C along its length | One or more traps blown | Test each in turn |
| Trap cycling continuously at high frequency | Undersized or worn seat | Replace on the next service |

A blown trap on the UP-120 will make the LP-580 finish badly. Test all four before
concluding that a machine has a fault of its own.

### 10.8 Vacuum motors and filters

Blower current draw is the quickest health check. A blower drawing more than 15%
above its commissioning figure has a bearing problem or a blocked exhaust. Record the
reading each quarter so the trend is visible.

Lint filters are cleaned weekly and replaced six-monthly. A filter that has been
washed more than ten times has lost its efficiency and should be replaced regardless
of appearance. Blocked filters degrade the finish long before they raise a fault code,
so a complaint of damp garments with no code on the panel is a filter complaint until
proved otherwise.

### 10.9 Air filter, regulator and lubricator

Each drop has its own FRL, set to the machine's regulated pressure from 3.3. The bowl
is drained daily by the operator. Filter elements are replaced quarterly. Lubricator
drip rate is one drop every 30 cycles; more than that carries oil onto the garment and
shows as spotting, and less than that leads to sticking cylinders and clamp faults.
The compressor receiver is drained daily and the refrigerated dryer checked weekly.
Water in the air line is the cause of most intermittent clamp faults on the TT-240 and
TL-260, and of the seasonal pattern described in 11.5.

---

## 11. Fault codes

Codes are prefixed by machine: **SU** for the LP-580 shirt unit, **UP** for the
UP-120, **TT** for the TT-240 and **TL** for the TL-260. A code always means the same
thing wherever it appears in this manual.

"Technician: Yes" means an operator must not attempt the repair. Isolate the machine
under 2.8 and call one. A latched code is cleared with RESET only after the cause has
been removed; a code that returns immediately on reset has not been fixed.

### 11.1 LP-580 shirt unit

| Code | Message | Likely cause | Operator check | Technician |
|---|---|---|---|---|
| SU-01 | STEAM LOW | Header below 480 kPa; strainer blocked; boiler not up; too many machines demanding at once | Read the panel and boiler gauges; check the machine steam valve is fully open; wait 10 min in the first hour of the day | No unless it persists |
| SU-02 | STEAM VALVE | Steam solenoid not opening or not confirmed; failed coil; feedback switch out of adjustment | Confirm SU-01 is not also present; listen for the solenoid at cycle start | Yes |
| SU-03 | AIR LOW | Ring main below 550 kPa; FRL filter blocked; compressor off or in fault | Read the panel air gauge; check the compressor is running and the receiver is up | No unless the filter needs changing |
| SU-04 | VACUUM FAIL | Blower not running; lint filter blocked; exhaust obstructed; blower overload tripped | Check the lint filter; listen for the blower; check the overload at the panel | Yes if the overload has tripped twice |
| SU-05 | GUARD OPEN | Sleeve guard or rear drive door open; interlock key misaligned | Close and latch every guard; check nothing is caught in a guard edge | Yes if the code stays with the guards closed |
| SU-06 | 2-HAND FAULT | Buttons not pressed within 500 ms; a button held from the previous cycle; contact discrepancy | Release both buttons fully, then press together | Yes if it repeats with correct operation |
| SU-07 | CYCLE TIMEOUT — BODY | Body former step exceeded 45 s; steam or vacuum not reaching setpoint; split former skin | Inspect the skin; check whether SU-01 or SU-04 is also logged | Yes if the skin is damaged |
| SU-08 | COLLAR OVER-TEMP | Collar plate above 195 °C; steam trap blown; control thermostat failed | Stop the machine, close the collar steam valve, allow it to cool | Yes |
| SU-09 | COLLAR SENSOR | Collar plate temperature sensor open circuit or out of range | None | Yes |
| SU-10 | FORMER PRESSURE | Former did not reach set inflation within 4 s; split skin; loose skin clamp ring; low air | Inspect the skin and the clamp ring | Yes if the skin is split |
| SU-11 | CLAMP NOT CLOSED | Collar clamp bar proximity switch not made; obstruction under the bar; switch out of adjustment | Isolate, remove any obstruction, restart | Yes if there is no obstruction |
| SU-12 | SLEEVE SOLENOID | Sleeve pad air solenoid not confirmed | Confirm SU-03 is not present | Yes |
| SU-13 | JAM — BODY | Body clamp met an obstruction, or the former did not deflate on schedule | Isolate under 2.9 and clear. Do not reach in live | No if the jam is simple fabric |
| SU-14 | JAM — COLLAR | Collar clamp bar met an obstruction: button, collar stay, hanger hook, folded double cuff | Isolate under 2.9 and clear | No if the jam is simple |
| SU-15 | FILTER BLOCKED | Vacuum differential above limit; lint filter due for cleaning | Clean the lint filter and reset | No |
| SU-16 | PLACKET CLAMP | Placket clamp not confirmed closed; shirt not squared to the front guide | Re-square the placket and re-initiate | Yes if it repeats on a correctly loaded shirt |
| SU-17 | SIZE NOT SET | Cycle initiated with the SIZE control between detents | Set SIZE to a detent position 1 to 4 | No |
| SU-18 | CONTROL SUPPLY | 24 V DC control supply out of tolerance; blown control fuse | None | Yes |

### 11.2 UP-120 utility press

| Code | Message | Likely cause | Operator check | Technician |
|---|---|---|---|---|
| UP-01 | STEAM LOW | Header below 480 kPa; strainer blocked | Panel gauge; machine valve fully open | No unless persistent |
| UP-02 | AIR LOW | Ring main below 550 kPa; FRL blocked; regulator drifted | Panel air gauge; regulator setting against 6.4 | No |
| UP-03 | VACUUM FAIL | Blower stopped; lint filter blocked; buck perforations blocked | Clean the lint filter; brush the buck | Yes if the blower will not run |
| UP-04 | CYCLE TIMEOUT | Head did not reach the closed position within 4 s, or did not return within 4 s | Look for a garment or hanger fouling the head | Yes if nothing is fouling |
| UP-05 | 2-HAND FAULT | Buttons outside the 500 ms window; button held; channel discrepancy | Release both, then press together | Yes if it repeats |
| UP-06 | HEAD OVER-TEMP | Head above 185 °C; trap blown; thermostat failed | Stop, close the head steam valve, cool 40 min | Yes |
| UP-07 | HEAD SENSOR | Head temperature sensor open circuit or out of range | None | Yes |
| UP-08 | HEAD SOLENOID | Head air solenoid not confirmed, or head did not return to open | Confirm UP-02 is not present; check the head is not fouled | Yes |
| UP-09 | BUCK VACUUM LOW | Foot pedal vacuum below 1.5 kPa; perforations blocked; pad flattened | Brush the buck; check pad condition under 9.3 | Yes if the pad is due |
| UP-10 | PRESSURE MISMATCH | Regulator set below the selected fabric class minimum | Set the regulator to the value in 6.4 | No |

### 11.3 TT-240 trouser topper

| Code | Message | Likely cause | Operator check | Technician |
|---|---|---|---|---|
| TT-01 | STEAM LOW | Header below 450 kPa; strainer blocked | Panel gauge; machine valve | No unless persistent |
| TT-02 | AIR LOW | Ring main below 520 kPa; FRL blocked; water in the line | Panel gauge; drain the FRL bowl | No |
| TT-03 | VACUUM FAIL | Blower stopped; lint filter blocked | Clean the filter; listen for the blower | Yes if the blower will not run |
| TT-04 | GUARD / CURTAIN | Light curtain interrupted, or rear panel open | Stand clear and reset; check for a hanger or garment in the curtain | Yes if it will not clear with the area empty |
| TT-05 | WAIST CLAMP | Clamp did not reach the set position within 3 s; water in the cylinder; WAIST setting too large for the garment | Check the WAIST setting; drain the FRL; check the waistband is done up | Yes if it repeats on dry air |
| TT-06 | CYCLE TIMEOUT | Cycle exceeded 50 s; steam or vacuum not reaching setpoint | Check TT-01 and TT-03 | Yes |
| TT-07 | PLATE SENSOR | Seat or fly plate temperature sensor fault | None | Yes |
| TT-08 | SEAT SOLENOID | Seat or fly plate air solenoid not confirmed | Confirm TT-02 is not present | Yes |
| TT-09 | JAM — WAIST | Waist clamp met an obstruction: belt, buckle, keys or coins left in a pocket | Isolate under 2.9 and clear; empty the pockets | No if the jam is simple |

### 11.4 TL-260 trouser legger

| Code | Message | Likely cause | Operator check | Technician |
|---|---|---|---|---|
| TL-01 | STEAM LOW | Header below 450 kPa; strainer blocked | Panel gauge; machine valve | No unless persistent |
| TL-02 | AIR LOW | Ring main below 520 kPa; FRL blocked; water in the line | Panel gauge; drain the FRL bowl | No |
| TL-03 | VACUUM FAIL | Blower stopped; lint filter or leg plenum blocked with lint | Clean the filter | Yes if the blower will not run |
| TL-04 | GUARD OPEN | Leg buck side guard open; interlock misaligned | Close and latch the guards | Yes if the code stays |
| TL-05 | CLAMP PRESSURE | Clamp did not reach the set force within 3 s; water in the cylinder; worn seals; setting above supply pressure | Check the setting against 7.3; drain the FRL | Yes if it repeats on dry air |
| TL-06 | PLENUM ACCESS | Vacuum plenum access panel open | Close and latch the panel | Yes if the code stays |
| TL-07 | BUCK OVER-TEMP | Buck above 165 °C; trap blown; thermostat failed | Stop, close the steam valve, cool 40 min | Yes |
| TL-08 | CLAMP UNEVEN | Left and right clamp positions differ by more than 4 mm | Re-lay both legs to the end stop and re-initiate | Yes if it repeats when correctly laid |
| TL-09 | JAM — LEG | Leg clamp met an obstruction: hanger clip, turn-up folded under, hem weight | Isolate under 2.9 and clear | No if the jam is simple |

### 11.5 Troubleshooting the eight most common faults

**SU-01 / UP-01 / TT-01 / TL-01 — low steam.** Nearly always the first hour of the
day, and nearly always the header rather than the machine. The boiler makes pressure
quickly; the header takes longer to warm and, until it does, it condenses everything
you put into it. Warm the header for ten minutes on the warming valve before opening
the main. If a low-steam code appears mid-morning with the boiler at pressure, the
cause is a blocked Y-strainer on that machine's drop or a blown trap somewhere on the
line pressurising the common return. Blow the strainer down, then test the traps under
10.7. If low steam appears only when all four machines cycle together, the header
volume is short and the line must be sequenced rather than run flat out — top and leg
trousers while the shirt unit is idle, not alongside it.

**SU-03 / UP-02 / TT-02 / TL-02 — low air.** Check the compressor first: running, not
in fault, receiver up. If the compressor is fine and one machine alone is showing the
code, the fault is at that machine's FRL. A filter element at the end of its life will
pass enough air to hold pressure at rest and not enough to hold it during a cycle, so
the gauge looks correct until the machine moves. Change the element. If several
machines show the code together at the same time of day, the compressor duty is being
exceeded, usually because a leak has opened up in the ring main overnight; listen
along the main with the plant quiet before the first shift.

**SU-04 / UP-03 / TT-03 / TL-03 — vacuum failure.** Clean the lint filter before
anything else; it is the cause four times out of five. If the filter is clean, check
the exhaust is not obstructed, then check the blower is turning. A blower that hums
but does not turn has a seized bearing or a failed capacitor and is a technician job.
A blower that trips its overload twice in a day must not be reset a third time. Note
that a vacuum problem usually shows up first as poor finishing rather than as a code
— a partially blocked filter degrades the finish long before it trips the pressure
switch, so treat "damp garments, no code" as a vacuum complaint.

**SU-06 / UP-05 — two-hand control fault.** In most cases the operator has pressed one
button before the other by more than half a second, which is a technique problem, not
a machine problem. Both palms go down together. If the code persists when two
different people have both operated the machine correctly, the fault is in the
control: a sticking button, a worn contact block, or a channel discrepancy detected by
the safety relay. **Do not try to work around this code.** It exists to tell you that
a safety circuit is not behaving as designed. The machine stays out of service until a
technician has tested and, if necessary, replaced the button assembly, and the result
is recorded in Appendix B.

**SU-07 — body former cycle timeout.** The body step has run past 45 s without
reaching its setpoints. Three causes, in order of likelihood: a split former skin,
which will also show SU-10; low steam, which will also show SU-01; and a blocked
vacuum path, which will also show SU-04. If SU-07 appears on its own, inspect the skin
closely at the shoulder and under the arms, where splits start. A skin with a split
will still inflate to a point and will still finish shirts badly, so operators often
run for weeks with a marginal skin and blame the programme. Replacement is an annual
task under 10.5 and takes about 90 minutes.

**SU-13 / SU-14 / TT-09 / TL-09 — jam detected.** Something was between a clamp and
its buck. The usual objects are a cuff button, a collar stay, a hanger hook, a folded
double cuff, a doubled-over collar band, and on the trouser machines a belt buckle or
coins left in a pocket. Isolate under 2.9 before touching anything. Once the
obstruction is out, inspect the cover at the jam point: a button crushed against a
cover leaves a dent that will mark every garment after it. Frequent SU-14 on the
collar station means collars are being loaded without checking for stays; make the
check part of the loading routine at 5.4.

**UP-06 / SU-08 / TL-07 — over-temperature.** The head, plate or buck has exceeded its
limit. This is a real hazard, not a nuisance code: at 185 °C the UP-120 head will
scorch cotton on contact and melt synthetics instantly. The usual cause is a blown
steam trap letting live steam through continuously instead of cycling. Do not reset
and continue. Close the steam valve to that element, allow 40 minutes, and have the
trap tested under 10.7. Check the last garments pressed before the code appeared —
they may be scorched without it being obvious until the customer sees them in
daylight.

**TT-05 / TL-05 — clamp fault.** Look at the pattern before you look at the machine.
If the fault appears in the first hour on cold mornings and disappears later, the
cause is condensate in the air line reaching the clamp cylinders; drain the receiver,
check the refrigerated dryer, and drain each FRL bowl daily. If the fault appears at
any time and worsens under load, the cylinder seals are worn and the clamp is no
longer making its rated force — this will also show as a soft crease and a
"crease didn't last" complaint from customers, so the two symptoms belong together. If
the fault appears only on heavy garments at setting 4, the supply pressure is below
the 520 kPa minimum.

---

## 12. Warranty and service

### 12.1 Terms

Sankosha warrants each machine on this line against defects in materials and
workmanship for **24 months from the date of commissioning**, and the steam-side
castings — heads, plates and bucks — for **60 months**. The warranty covers parts and
labour during ordinary business hours at the installed address.

Commissioning dates for the machines covered by this manual are 12 February 2018 for
the LP-580 and UP-120, and 4 November 2019 for the TT-240 and TL-260. The parts and
labour warranty on all four has expired. The steam-side casting warranty on the
TT-240 and TL-260 ran to 4 November 2024. This section is retained because it also
sets out the ongoing conditions that govern service work and the safety certification
obligation, which does not expire with the warranty.

### 12.2 Exclusions

The warranty does not cover:

- consumable items: pads, covers, felts, skins, filters, press cloths, hoses,
  strainer screens, gaskets, seal kits and lubricant;
- damage caused by steam quality — wet steam, carryover, scale or corrosion from
  untreated boiler feedwater;
- damage caused by compressed air quality outside ISO 8573-1 class 4.4.3;
- damage caused by supply voltage outside 400 V ±6%, or by phase failure;
- damage caused by operating a machine with a defeated, bypassed, disconnected or
  removed guard, interlock, two-hand control or emergency stop;
- damage caused by pressing articles excluded under 1.5;
- fair wear and tear, including cover glazing, pad compression and skin stretch;
- work carried out by a person who is not a Sankosha authorised technician;
- consequential loss, including garment damage, lost production and rework.

### 12.3 Mandatory guard and two-hand control certification

The owner must have every guard interlock, two-hand control and emergency stop on
this line tested and certified annually by a Sankosha authorised technician. The
certificate must record each device tested, the method used, the result and the
technician's authorisation number, and must be retained for five years.

This obligation is not discharged by the monthly in-house tests under 10.6. The
monthly tests are the owner's own check that the devices still work; the annual
certification is an independent verification of the safety circuit, including the
safety relay, the wiring and the measured response times.

**A machine without a current certificate is not to be operated.**

### 12.4 What voids the warranty and the certification

Any one of the following voids both the warranty and the current safety certificate
immediately:

- defeating a two-hand control by any means, including taping, tying, wedging, or
  operating one button with anything other than a hand;
- removing, bypassing or bridging a guard interlock;
- disabling an emergency stop or fitting a non-approved replacement;
- replacing a dual-channel safety relay with a general-purpose relay;
- altering the two-hand control timing window from 500 ms;
- fitting non-Sankosha pads, covers or skins that alter the closing gap;
- operating a machine after a safety device has failed a test under 10.6;
- raising the steam pressure above 620 kPa, or a head or plate temperature setpoint
  above the range given in 2.3.

### 12.5 Service and parts

Quote the model and serial number with every service call and every parts order. Have
ready the fault code, the date and time it occurred, what the machine was doing, and
whether it has occurred before. A service call booked with a code and a pattern is
usually resolved in one visit; one booked as "the shirt machine isn't working" is
usually two.

Keep the completed records in Appendices A to D with the machine. A technician
attending a finishing complaint will ask for the pad and cover change log before
anything else, because a worn cover explains more finishing complaints than every
electrical fault on this line put together.

---

## Appendix A — Daily start-up checklist

Complete before the first garment. Tick each item, then initial and date at the foot.

| # | Check | LP-580 | UP-120 | TT-240 | TL-260 |
|---|---|---|---|---|---|
| 1 | Steam header warmed for 10 min on the warming valve | ☐ | ☐ | ☐ | ☐ |
| 2 | Machine steam valve fully open | ☐ | ☐ | ☐ | ☐ |
| 3 | Panel steam pressure within range (3.1) | ☐ | ☐ | ☐ | ☐ |
| 4 | Air valve open, panel air pressure within range (3.3) | ☐ | ☐ | ☐ | ☐ |
| 5 | FRL bowl drained | ☐ | ☐ | ☐ | ☐ |
| 6 | Lint screens clear | ☐ | ☐ | ☐ | ☐ |
| 7 | Vacuum blower running and sounding normal | ☐ | ☐ | ☐ | ☐ |
| 8 | Covers checked — no burns, holes, marks or glazing | ☐ | ☐ | ☐ | ☐ |
| 9 | Head, plates and former blown through | ☐ | ☐ | — | — |
| 10 | All guards fitted, closed and latched | ☐ | ☐ | ☐ | ☐ |
| 11 | E-stops accessible and not obstructed | ☐ | ☐ | ☐ | ☐ |
| 12 | Two-hand controls operate normally on an empty cycle | — | ☐ | ☐ | ☐ |
| 13 | Steam hoses visually sound — no wet spots, no braid damage | ☐ | ☐ | ☐ | ☐ |
| 14 | Floor clear; no trip hazards; no garments on the floor | ☐ | ☐ | ☐ | ☐ |
| 15 | Reject rail empty from the previous shift | ☐ | ☐ | ☐ | ☐ |
| 16 | No fault codes displayed | ☐ | ☐ | ☐ | ☐ |

Operator: ______________________  Date: ____/____/________

Faults found and action taken: _______________________________________________

_____________________________________________________________________________

---

## Appendix B — Weekly safety device test record

Test method is in 10.6. Record P for pass, F for fail. A fail takes the machine out of
service immediately and must be reported to the supervisor the same day.

| Week ending | LP-580 guards | LP-580 E-stops | UP-120 2-hand | UP-120 guards | UP-120 E-stop | TT-240 2-hand | TT-240 curtain | TT-240 E-stop | TL-260 2-hand | TL-260 guards | TL-260 E-stop | Line master | Tested by | Supervisor |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ___/___/______ | | | | | | | | | | | | | | |
| ___/___/______ | | | | | | | | | | | | | | |
| ___/___/______ | | | | | | | | | | | | | | |
| ___/___/______ | | | | | | | | | | | | | | |
| ___/___/______ | | | | | | | | | | | | | | |
| ___/___/______ | | | | | | | | | | | | | | |
| ___/___/______ | | | | | | | | | | | | | | |
| ___/___/______ | | | | | | | | | | | | | | |

Notes on any fail — machine, device, action taken, and the date returned to service:

_____________________________________________________________________________

_____________________________________________________________________________

_____________________________________________________________________________

---

## Appendix C — Pad and cover change log

| Date | Machine | Item and part number | Reason (scheduled / worn / damaged) | Fitted by | Next due |
|---|---|---|---|---|---|
| ___/___/______ | | | | | ___/___/______ |
| ___/___/______ | | | | | ___/___/______ |
| ___/___/______ | | | | | ___/___/______ |
| ___/___/______ | | | | | ___/___/______ |
| ___/___/______ | | | | | ___/___/______ |
| ___/___/______ | | | | | ___/___/______ |
| ___/___/______ | | | | | ___/___/______ |
| ___/___/______ | | | | | ___/___/______ |
| ___/___/______ | | | | | ___/___/______ |
| ___/___/______ | | | | | ___/___/______ |

---

## Appendix D — Operator training sign-off

No person may operate a machine on this line until every item below is signed for that
machine. Training is repeated annually and after any change to a safety device, a
programme or a work method.

Operator name: ______________________________  Machine: __________________

| # | Competency | Trainer initial | Operator initial | Date |
|---|---|---|---|---|
| 1 | Location and use of all emergency stops and the line master stop | | | ___/___/______ |
| 2 | Two-hand control operation; why it must never be defeated (2.1) | | | ___/___/______ |
| 3 | Crush hazards, closing forces and closing times (2.2) | | | ___/___/______ |
| 4 | Hot surfaces, cooling times and burn first aid (2.3) | | | ___/___/______ |
| 5 | Steam and condensate hazards; finding a leak safely (2.4) | | | ___/___/______ |
| 6 | Guard interlocks and the prohibition on defeat (2.5) | | | ___/___/______ |
| 7 | What to do if a hand is trapped, including every manual release (2.7) | | | ___/___/______ |
| 8 | Lockout and tagout, including the try-to-start step (2.8) | | | ___/___/______ |
| 9 | Safe jam clearing (2.9) | | | ___/___/______ |
| 10 | Why you never reach into a running machine (2.10) | | | ___/___/______ |
| 11 | PPE and prohibited clothing and jewellery (2.11) | | | ___/___/______ |
| 12 | Correct loading procedure for the assigned machine | | | ___/___/______ |
| 13 | Size, programme, tension and clamp settings | | | ___/___/______ |
| 14 | Inspecting for stains before pressing; use of the reject rail (5.10) | | | ___/___/______ |
| 15 | Recognising the finishing faults in Section 8 | | | ___/___/______ |
| 16 | Reading fault codes; knowing which are technician-only (Section 11) | | | ___/___/______ |
| 17 | Daily start-up checklist (Appendix A) | | | ___/___/______ |
| 18 | Recording a pad or cover change (Appendix C) | | | ___/___/______ |

Supervisor: ______________________  Date: ____/____/________

Retrain due: ____/____/________

---

*End of manual. Sankosha press line — LP-580, UP-120, TT-240, TL-260. Rev 5, March 2022.*
