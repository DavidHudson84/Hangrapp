# UNION XL-800

## Dry Cleaning Machine — Operations and Maintenance Manual

**Model:** XL-800
**Machine type:** Enclosed-circuit dry-to-dry perchloroethylene dry cleaning machine, three-tank, with integrated distillation still and refrigerated solvent recovery
**Nominal load capacity:** 25 kg
**Serial number:** UXL8-2019-0447
**Year of manufacture:** 2018
**Date of installation:** March 2019
**Installed at:** Main Street Dry Cleaners, Shop 4, 118 Hargreaves Street, Bendigo VIC 3550
**Manual revision:** Rev 4, January 2024. Supersedes Rev 3, June 2021.

### Revision history

| Rev | Date | Summary of change |
|---|---|---|
| 1 | 03/2017 | First issue for XL-800 series. |
| 2 | 11/2018 | Added refrigerated recovery data; revised fault codes E24 to E27. |
| 3 | 06/2021 | Revised exposure-limit references; added programmes 11 and 12; added E34 and E40. |
| 4 | 01/2024 | Revised maintenance intervals; added carbon adsorber desorb procedure; expanded fault code section; corrected still steam demand; added decommissioning notes. |

---

## 1. Front matter

### 1.1 About this manual

This manual covers the installation, operation, routine maintenance and fault
diagnosis of the Union XL-800 three-tank perchloroethylene dry cleaning machine.
It is written for the machine owner, the trained plant operator, and the
technician who attends the machine for scheduled service.

### 1.2 How to use this manual

- **New to the machine:** read Section 2 (Safety) and Section 5 (Machine
  description) before touching the control panel, then Section 8.
- **Running the machine day to day:** Sections 7, 8, 9 and 10. Keep a copy of
  the programme table near the panel.
- **Machine stopped with a code displayed:** go straight to Section 11. The
  table says whether an operator may clear the fault or whether a technician is
  required. If it says technician, stop and call one.
- **Ordering parts:** Section 12. Quote serial UXL8-2019-0447 with every order.
- **Quoting service work:** Section 13 sets out intervals and what voids
  warranty.

### 1.3 Symbols used in this manual

| Symbol word | Meaning |
|---|---|
| **DANGER** | A hazard that will cause death or serious injury if the instruction is not followed. |
| **WARNING** | A hazard that may cause death or serious injury if the instruction is not followed. |
| **CAUTION** | A hazard that may cause minor injury, or that will damage the machine. |
| **NOTE** | Information that affects the result of the work but is not a hazard. |
| **TECHNICIAN** | The task must be done by a person holding the relevant trade licence or the manufacturer's service authorisation. An operator must not attempt it. |

### 1.4 Machine identification

The machine data plate is fixed to the right-hand side panel, 1,500 mm above
floor level, adjacent to the electrical isolator. It carries the model, serial
number, year of manufacture, supply voltage, full load current, solvent charge,
refrigerant type and charge mass, and the maximum working pressure of the still
steam jacket. Do not remove, paint over or obscure the data plate. If it becomes
unreadable, order a replacement by quoting the serial number.

A second plate on the still access panel carries the still vessel number, the
design pressure of the steam jacket and the date of the last internal inspection.

### 1.5 Intended use

The XL-800 is designed to clean textile garments and made-up textile articles in
perchloroethylene in a closed circuit, and to recover the solvent from the load
by heated air drying, refrigerated condensation and carbon adsorption.

The machine must not be used:

- with any solvent other than perchloroethylene, unless converted by the
  manufacturer and re-plated accordingly;
- to clean articles contaminated with flammable liquids, oxidising agents, paint,
  adhesive, or unknown chemical residues;
- to clean articles carrying free water above the limit at 8.3;
- to dry articles that have not been through a solvent bath in this machine;
- as a storage vessel for solvent outside the machine's own tanks.

### 1.6 Residual risks

Even when the machine is used as intended and all guards are fitted, the
following risks remain and must be managed by the occupier:

- solvent vapour exposure during button trap and lint trap opening;
- solvent vapour and hot surfaces during still cleaning;
- hot condensate and steam at the still jacket and the drying battery;
- rotating drum inertia after the drive is de-energised;
- stored energy in the compressed air receiver and the refrigeration circuit;
- manual handling of muck drums, filter cartridges and solvent drums.

---

## 2. Safety

### 2.1 The solvent

The XL-800 operates on perchloroethylene, also called tetrachloroethylene or
PCE, CAS 127-18-4. It is a colourless, non-flammable chlorinated hydrocarbon,
density 1.62 kg/L at 20 °C, boiling point 121 °C. Its vapour is about 5.7 times
heavier than air and collects in pits, floor drains, bunds and low points.

**DANGER** — Perchloroethylene vapour causes central nervous system depression.
High concentrations cause dizziness, loss of coordination and unconsciousness. A
person who collapses in a solvent-rich space will not recover unaided and must
not be followed in by an unprotected rescuer.

- **Acute inhalation:** headache, dizziness, nausea, eye and airway irritation,
  impaired judgement, and at high concentration narcosis and respiratory arrest.
- **Skin and eyes:** repeated contact defats the skin and causes dermatitis;
  liquid held against skin causes chemical burn; splash causes corneal injury.
- **Chronic:** a suspected human carcinogen, with recognised effects on liver,
  kidneys and central nervous system, and suspected reproductive toxicity.

The Safety Data Sheet for the solvent in use must be held at the plant and must
be current. The site is supplied with drummed perchloroethylene by Solvex
Chemicals Australia Pty Ltd; the SDS accompanying each delivery replaces the
previous copy.

### 2.2 Exposure standards and Australian WHS references

The occupier must manage airborne contaminant exposure under the **Occupational
Health and Safety Act 2004 (Vic)** and the **Occupational Health and Safety
Regulations 2017 (Vic)**, administered by WorkSafe Victoria. The Regulations
require that no person is exposed above the exposure standard, and that exposure
is reduced so far as is reasonably practicable below it.

The exposure standard for tetrachloroethylene is published by Safe Work
Australia in *Workplace Exposure Standards for Airborne Contaminants*:

| Measure | Value |
|---|---|
| Time-weighted average, 8-hour | 50 ppm (approximately 340 mg/m³) |
| Short-term exposure limit, 15-minute | 150 ppm (approximately 1,020 mg/m³) |
| Odour threshold (indicative only) | approximately 5 ppm |

**NOTE** — The odour threshold is well below the exposure standard, which means
you will smell solvent long before the atmosphere is over the standard. It also
means operators become desensitised to the smell over a shift and cannot use
their nose as a monitor. Odour is not a measurement.

Other duties the occupier should be aware of:

- **Hazardous substances** — Part 4.1 of the OHS Regulations 2017: register, SDS,
  labelling, risk control, and health surveillance where there is a significant
  risk. Biological monitoring for tetrachloroethylene is available.
- **Dangerous goods** — UN 1897, Class 6.1, Packing Group III, subject to the
  **Dangerous Goods Act 1985 (Vic)** and the Dangerous Goods (Storage and
  Handling) Regulations 2022, including manifest and placarding thresholds.
- **Environment Protection Act 2017 (Vic)** — the general environmental duty
  applies. Still residue and spent filters are prescribed industrial waste and
  must move under a waste tracking record with an EPA-permissioned transporter,
  at this site Sovereign Environmental Services Pty Ltd.
- **Trade waste** — no solvent, separator water or still residue may enter the
  sewer. Discharge is governed by Coliban Water agreement TW-4471.
- **AS 2865** confined spaces (2.8); **AS/NZS 1715** and **AS/NZS 1716**
  respiratory protection; **AS/NZS 4836** low-voltage electrical work.

### 2.3 Personal protective equipment

| Task | PPE required |
|---|---|
| Loading and unloading | Safety footwear; nitrile gloves for damp goods |
| Opening the button trap | Safety glasses; solvent-resistant gloves (Viton or laminate) |
| Filter cartridge change | Glasses; gloves; chemical apron; half-face respirator, A2 cartridge |
| Muck cooking and residue removal | Face shield; gauntlets; apron; half-face respirator, A2 cartridge; heat-resistant gloves for hot parts |
| Still internal cleaning | Full-face respirator, A2 cartridge or supplied air; gauntlets; coveralls; see 2.8 |
| Small spill response | Glasses; gauntlets; A2 respirator |
| Large spill or spill in a confined area | Supplied-air respiratory protection only |

**WARNING** — Latex, natural rubber, neoprene and PVC gloves are permeated by
perchloroethylene within minutes. Only fluoroelastomer (Viton), polyvinyl
alcohol or multi-layer laminate gloves give useful protection. Gloves that have
been in liquid contact are disposed of, not reused. Respirator cartridges are
dated when opened and discarded after 30 days in use, or immediately on
breakthrough odour. Respirator users must be fit tested to AS/NZS 1715.

### 2.4 Ventilation

The machine is fully enclosed and does not exhaust to atmosphere in normal
running, but the plant room must remove fugitive emissions from door and trap
openings and from maintenance work. Minimum general ventilation is 6 air changes
per hour. Local exhaust is provided at the button trap, the lint trap and the
still access, drawing from **low level** because the vapour is heavier than air.
Ventilation runs whenever the machine runs and for 15 minutes after the last
cycle of the day.

### 2.5 Emergency stop

Two mushroom-head emergency stop buttons are fitted: one on the control panel
fascia, one on the left-hand end frame beside the still access. Pressing either
removes power from the drum drive, all solvent pumps, the fan and the
refrigeration compressor; closes the steam solenoids to the drying battery and
the still jacket; holds the door lock engaged; and displays **E38**.

Emergency stop does **not** isolate the electrical supply, vent the air receiver
or de-pressurise the steam line. It is not a substitute for isolation. To reset:
correct the cause, twist the mushroom head to release, press RESET. If a load is
locked in, the controller runs a 90-second vapour purge before releasing the
door.

### 2.6 Isolation and lockout/tagout

**DANGER** — The machine has four energy sources. All four must be isolated
before any work inside a guard or panel.

| Energy source | Isolation point | Verification |
|---|---|---|
| Electrical, 400 V 3-phase | Lockable wall isolator, left of machine | Test for dead at the incoming terminals with a proven tester |
| Steam | Lockable gate valve on the header drop | Open the drain cock, gauge reads zero |
| Compressed air | Lockable ball valve with integral bleed | Panel air gauge reads zero |
| Solvent under head | Tank isolating valves V1, V2, V3 | Pump discharge gauge reads zero |

A lock is removed only by the person who fitted it. If that person is not
available, the lock may be removed only under the written authority of the
occupier after positive confirmation that no person is exposed.

1. Advise all affected persons.
2. Complete or abort the cycle and let the drum stop.
3. Switch the control to OFF at the panel.
4. Turn each isolator OFF and fit a personal padlock and danger tag.
5. Bleed stored energy: open the air bleed, open the steam drain cock, let the
   still jacket cool below 40 °C.
6. Verify zero energy at each point by the method in the table.
7. Only then begin work.

**TECHNICIAN** — Work on the refrigeration circuit is restricted to a person
holding an ARC refrigerant handling licence. Venting refrigerant to atmosphere
is an offence.

### 2.7 Spill response

Keep a spill kit within 5 m of the machine containing at least 20 kg of inert
absorbent (vermiculite or a proprietary chlorinated-solvent absorbent), a
non-sparking scoop, two sealable 20 L steel salvage drums, gauntlets, safety
glasses, a face shield and two A2 cartridge respirators. The kit is checked
weekly and restocked immediately after any use.

**Small spill, under 2 litres, inside the bund:** stop the source; warn others
and increase ventilation; put on gloves, glasses and respirator; cover the spill
with absorbent from the outside in; scoop into a salvage drum, seal and label as
prescribed industrial waste; ventilate 30 minutes; record it in the plant log.

**Large spill, over 2 litres, or any spill outside the bund:** evacuate and do
not attempt clean-up; isolate at the wall isolator if safe to reach; boom the
floor drains, the pit and the laneway; do not use water, which spreads the spill
and carries it to sewer; call 000 if any person is affected or the spill has
reached a drain. A spill that has entered stormwater or sewer must be reported to
EPA Victoria and to Coliban Water.

**NOTE** — Perchloroethylene will lift and soften vinyl floor coverings, attack
some floor sealers, and penetrate unsealed concrete. Absorb and remove promptly,
and inspect the bund coating afterwards.

### 2.8 Fire, and confined space in the still

Perchloroethylene does not burn and has no flash point. However, above about
315 °C it decomposes to **hydrogen chloride** and **phosgene**, both acutely
toxic, so a fire involving this machine is a toxic gas incident. Use CO₂ or dry
chemical on electrical fires; do not direct water into the electrical enclosure.
On discovering fire, raise the alarm, evacuate, call 000 and tell the responding
officer the machine holds approximately 380 litres of perchloroethylene. Do not
re-enter until the fire service has cleared the building.

**DANGER** — The still, when opened for internal cleaning, is a confined space
within the meaning of AS 2865. Entry, or insertion of the head and shoulders
through the still access opening, must not occur unless:

1. a confined space entry permit has been issued by a competent person;
2. the still is isolated and locked out under 2.6 and the jacket is below 40 °C;
3. the still has been purged and mechanically ventilated for at least 30 minutes;
4. the atmosphere tests at oxygen 19.5% to 23.5% and perchloroethylene below
   25 ppm;
5. a stand-by person is stationed outside with a means of raising the alarm and
   rescue equipment appropriate to the space;
6. the entrant wears a harness and retrieval line where the configuration allows.

Routine muck removal (9.7) is performed from **outside** the still with rakes and
scoops and is not confined space entry, provided no part of the body enters the
opening. The base tank beneath the machine is also a confined space and is not
entered by site staff at any time; base tank cleaning is a manufacturer's
service task.

### 2.9 Guarding, interlocks and training

Do not defeat, bypass or modify any of the following:

- the loading door interlock and lock (5.8);
- the button trap lid interlock;
- the lint trap door switch;
- the still access door limit switch;
- the drum drive inverter safe-torque-off circuit.

Bypassing an interlock voids the warranty (13.5) and is an offence under the OHS
Regulations 2017.

No person is to operate the XL-800 who has not read Sections 2, 5, 6, 7 and 8 of
this manual, been shown the machine, the isolators and the spill kit by a
competent operator, worked at least ten supervised cycles, and been recorded as
competent in the site training register. Still operation, muck cooking and filter
changing require separate sign-off. Training is refreshed annually and after any
change to the machine, the solvent or the procedures in this manual.

---

## 3. Specifications

All figures are for the XL-800 as built to serial UXL8-2019-0447 and as
commissioned at Bendigo in March 2019. Figures marked "measured" were recorded at
commissioning and are reproduced in the record at Appendix A.

### 3.1 Capacity and drum

| Item | Value |
|---|---|
| Nominal load capacity, dry weight | 25 kg |
| Maximum load, dry weight | 25 kg |
| Minimum economic load | 12 kg |
| Load factor, cotton and blends | 1:20 |
| Load factor, bulky and low-density work | 1:25 |
| Drum volume | 505 L |
| Drum diameter × depth | 1,120 × 512 mm |
| Drum material | Stainless steel 304, perforated 3 mm, 3 lifters |
| Drum perforation open area | 22% |
| Door opening diameter | 620 mm |
| Door sill height above floor | 780 mm |
| Door hinge | Left hand, 180° swing |
| Cage-to-shell clearance | 22 mm |

### 3.2 Drum speeds

| Phase | Speed | Approximate G force |
|---|---|---|
| Wash, forward/reverse | 32 rpm | 0.64 |
| Distribution | 90 rpm | 5.1 |
| Intermediate extract | 350 rpm | 76.7 |
| Final extract | 480 rpm | 144.3 |
| Dry, tumble | 28 rpm | 0.49 |
| Cool-down tumble | 28 rpm | 0.49 |
| Wash reversal interval | 12 s run / 3 s pause | — |
| Extract ramp time to final speed | 45 s | — |
| Coast-down time from final extract | 55 s | — |

### 3.3 Dimensions and weights

| Item | Value |
|---|---|
| Overall width | 2,380 mm |
| Overall depth | 1,460 mm |
| Overall height | 2,290 mm |
| Height over still lifting eye | 2,410 mm |
| Minimum door opening for delivery | 1,550 mm wide × 2,350 mm high |
| Nett weight, empty and dry | 3,150 kg |
| Weight charged with solvent, no load | 3,760 kg |
| Operating weight, maximum | 3,860 kg |
| Static floor loading, operating | 1,480 kg/m² |
| Dynamic loading at final extract | 4.8 kN peak at 8 Hz |
| Number of frame feet | 6, adjustable ±25 mm |
| Shipping weight, crated | 3,340 kg |

### 3.4 Electrical supply

| Item | Value |
|---|---|
| Supply | 400 V, 3-phase + N + E, 50 Hz |
| Voltage tolerance | ±6% |
| Frequency tolerance | ±2% |
| Full load current | 32 A |
| Starting current, worst case | 48 A for 3 s |
| Recommended supply protection | 40 A, C curve, 4-pole |
| Earth leakage protection | 300 mA Type B RCD (inverter drives fitted) |
| Total connected load | 18.4 kW |
| Drum drive motor | 5.5 kW, inverter driven, 4 pole |
| Fan motor | 3.0 kW, direct on line |
| Refrigeration compressor | 5.5 kW, semi-hermetic |
| Solvent pump 1, wash circuit | 1.5 kW |
| Solvent pump 2, still feed and transfer | 1.1 kW |
| Control circuit | 24 V DC via 400 VA transformer |
| Minimum supply cable to isolator | 4-core 10 mm² Cu + earth |
| Short circuit withstand at terminals | 6 kA |
| Enclosure earthing | Single 10 mm² bond to the plant earth bar |

### 3.5 Steam and condensate

| Item | Value |
|---|---|
| Steam supply pressure at machine | 550 to 620 kPa gauge |
| Minimum working pressure | 480 kPa gauge |
| Maximum permitted supply pressure | 690 kPa gauge |
| Peak steam demand, drying and still together | 92 kg/h |
| Average steam demand over cycle | 38 kg/h |
| Still jacket demand | 44 kg/h |
| Drying battery demand | 48 kg/h |
| Steam connection | DN25 BSP female |
| Condensate connection | DN20 BSP female |
| Condensate return, peak | 92 kg/h at 148 °C |
| Steam trap, drying battery | Float and thermostatic, DN20 |
| Steam trap, still jacket | Inverted bucket, DN15 |
| Still jacket design pressure | 700 kPa |
| Still jacket relief valve setting | 650 kPa |
| Still jacket volume | 34 L |
| Drying battery heating surface | 18.5 m² |

### 3.6 Compressed air

| Item | Value |
|---|---|
| Supply pressure | 600 to 700 kPa |
| Regulated internal pressure | 550 kPa |
| Free air consumption, average | 42 L/min |
| Free air consumption, peak | 110 L/min |
| Air quality | ISO 8573-1 Class 3.4.3, dried |
| Connection | DN15 BSP female |
| Receiver volume required at plant | 300 L minimum |

### 3.7 Cooling water

| Item | Value |
|---|---|
| Supply temperature | 12 to 22 °C |
| Maximum supply temperature | 26 °C |
| Supply pressure | 250 to 500 kPa |
| Flow, refrigeration condenser | 1,150 L/h |
| Flow, still condenser | 480 L/h |
| Total peak flow | 1,630 L/h |
| Low flow alarm setting | 900 L/h |
| Temperature rise across machine | 8 to 12 K |
| Connections, in and out | DN20 BSP female |
| Maximum hardness | 200 mg/L as CaCO₃ |
| Maximum chloride | 150 mg/L |

### 3.8 Solvent system and tank volumes

| Item | Value |
|---|---|
| Solvent | Perchloroethylene, UN 1897 |
| Total working charge | 380 L |
| Total system capacity, flooded | 448 L |
| Tank 1, clean distilled | 120 L working, 145 L maximum |
| Tank 2, working | 130 L working, 155 L maximum |
| Tank 3, filtered | 130 L working, 148 L maximum |
| Base tank / sump | 38 L |
| Still batch capacity | 75 L |
| Still distillation rate | 22 L/h |
| Filter block | 4 × spin-on carbon-clay cartridges, 32 L total |
| Filter clean differential | 30 to 60 kPa |
| Water separator capacity | 12 L |
| Water polisher capacity | 8 L |
| Carbon adsorber charge | 45 kg activated carbon, 4 mm extruded |
| Button trap volume | 6 L |
| Lint trap volume | 22 L |
| Wash pump delivery | 240 L/min at 180 kPa |
| Transfer pump delivery | 90 L/min at 220 kPa |
| Solvent mileage target | 400 to 500 kg garment per litre |

### 3.9 Refrigeration circuit

| Item | Value |
|---|---|
| Refrigerant | R404A |
| Charge mass | 4.3 kg (16.86 t CO₂-e) |
| Compressor | Semi-hermetic reciprocating, 2 cylinder |
| High pressure cut-out | 2,700 kPa, manual reset |
| Low pressure cut-out | 40 kPa, automatic reset |
| Evaporator air-off target | 4 to 8 °C |
| Evaporator face area | 1.9 m² |
| Condenser | Water cooled, coaxial shell and tube |
| Defrost | Hot gas, 4 min per 45 min of run |
| Target superheat | 6 to 8 K |
| Target subcooling | 4 to 6 K |

**NOTE** — R404A has a high global warming potential and the charge exceeds
common leak-testing thresholds. The circuit is leak tested at each quarterly
service (10.4). Any top-up must be recorded with the date, the mass added and the
technician's ARC licence number.

### 3.10 Drying and recovery

| Item | Value |
|---|---|
| Air circulation volume | 3,200 m³/h |
| Drying air inlet temperature, normal | 62 to 68 °C |
| Drying air inlet temperature, maximum | 78 °C |
| Cool-down air temperature target | below 35 °C |
| Recovery end criterion | Outlet air below 22 °C for 60 s, or timer |
| Vapour purge before door release | 90 s |
| Residual solvent in load, typical | below 1.5 g/kg |
| Carbon adsorber face velocity | 0.38 m/s |
| Adsorber desorb steam demand | 14 kg per regeneration |

### 3.11 Noise and environment

| Item | Value |
|---|---|
| Sound pressure, wash phase, 1 m | 68 dB(A) |
| Sound pressure, drying phase, 1 m | 71 dB(A) |
| Sound pressure, final extract, 1 m | 74 dB(A) |
| Ambient temperature, operating | 5 to 35 °C |
| Ambient temperature, storage | 2 to 45 °C |
| Relative humidity, maximum | 80% non-condensing |
| Maximum altitude | 1,000 m |
| Ingress protection, control enclosure | IP54 |
| Ingress protection, machine | IP44 |

### 3.12 Cycle data

| Item | Value |
|---|---|
| Typical total cycle time, P03 | 46 min |
| Shortest programme | 28 min (P09 Refresh) |
| Longest programme | 68 min (P07 Heavy Soil Two-Bath) |
| Cycles per 8-hour shift, typical | 8 to 9 |
| Solvent throughput per two-bath wash | 220 L |
| Solvent throughput per three-bath wash | 330 L |
| Cycles between carbon desorbs | 60 |

---

## 4. Installation and services required

This section is retained for reference and for any future relocation. The machine
was commissioned on 14 March 2019; the completed record is at Appendix A.

### 4.1 Siting, floor and bunding

- Reinforced concrete slab, minimum 150 mm thick, minimum 25 MPa, capable of
  1,500 kg/m² static plus the dynamic loading at 3.3.
- Level within 3 mm over the footprint. Shim under the frame feet, not the bund.
- The machine stands within a solvent-tight bund of at least 110% of the largest
  single container in the bunded area. The installed bund is epoxy coated and
  coved 150 mm at the walls, with no penetrations.
- No floor drain, gully, pit or service penetration may be located inside the
  bund.
- The machine must not be sited over a suspended floor, a service duct or an
  inspection pit. Perchloroethylene vapour is heavier than air and will collect
  in any void beneath the machine.

### 4.2 Clearances

| Face | Minimum | Reason |
|---|---|---|
| Front | 1,200 mm | Loading, door swing, trolley access |
| Rear | 600 mm | Fan housing, air ducting, condensate |
| Left | 900 mm | Still access, muck drum removal |
| Right | 700 mm | Electrical enclosure door swing |
| Above | 400 mm | Lifting eye, carbon adsorber lid |

### 4.3 Services to be provided by the occupier

| Service | Requirement |
|---|---|
| Electrical | 400 V 3-phase + N + E, 40 A protected, to a lockable isolator within 2 m on the left-hand side |
| Steam | DN25 branch taken off the top of the header, with isolating valve, strainer and union at the machine |
| Condensate | DN20 gravity return to the boiler feed tank, falling 1:100, with trap and check valve |
| Compressed air | DN15 dried air from the top of the ring main, lockable ball valve with integral bleed |
| Cooling water | DN20 supply with isolating valve, strainer and pressure gauge |
| Cooling water return | DN20 to cooling tower or to trade waste under agreement TW-4471 |
| Ventilation | General ventilation and low-level local exhaust per 2.4 |
| Lighting | 300 lux minimum at the loading door and the still access |
| Spill containment | Bund per 4.1, plus a spill kit within 5 m |

### 4.4 Drainage and bunding of services

Cooling water leaving the machine is not solvent-bearing in normal operation and
may be discharged to trade waste under the site agreement. Separator water is
solvent-bearing and must not go to drain: it is directed to the water separator,
then to the carbon polisher, and the polished water is collected and removed as
waste. The site does not discharge separator water to sewer.

If a cooling water tube in the still condenser leaks, the cooling water return
can become solvent-bearing without warning. For that reason the return is fitted
with a sight glass, and the water is checked for haze at each weekly service.

### 4.5 Commissioning checklist

Every line must be signed off before the machine is handed to the operator.

1. Floor level verified, feet shimmed, locking nuts tightened.
2. Transit brackets removed from the drum suspension and retained.
3. Bund integrity tested with water and confirmed leak-free.
4. Supply verified for voltage, phase rotation and earth continuity.
5. Insulation resistance test at 500 V DC, minimum 1 MΩ, drives disconnected.
6. Isolator locked off and the lockout procedure demonstrated to the occupier.
7. Steam line blown down, strainer cleaned, trap operation confirmed.
8. Condensate return proven to flow; no waterlogging at the drying battery.
9. Air pressure set to 550 kPa at the regulator; no leaks after 30 minutes.
10. Cooling water flow measured and recorded against 3.7.
11. Refrigeration circuit leak tested, sight glass clear, superheat set.
12. Solvent charged to the levels at 3.8, drum by drum, quantity recorded.
13. Door interlock proven: the door will not open with the drum turning and the
    drum will not start with the door open.
14. Both emergency stops proven; E38 displayed and cleared.
15. Button trap and lint trap interlocks proven.
16. Still filled, heated, distillation rate measured against 3.8.
17. Water separator proven to decant; separator water free of haze.
18. Carbon adsorber desorb cycle run and condensate observed.
19. Three test cycles run on P03 with a ballast load, times and temperatures
    recorded.
20. Fault history cleared and the cycle counter zeroed.
21. Supervisor access code changed from the default and recorded at Appendix A.
22. Operator training delivered and signed; manual handed over.

---

## 5. Machine description

### 5.1 General arrangement

The XL-800 is a dry-to-dry machine: garments are loaded dry, washed in solvent,
extracted, dried and cooled in the same drum, and unloaded dry. The solvent never
leaves the closed circuit except as recovered residue or as the small losses
accounted for in mileage (9.3).

Solvent is held in three tanks below the drum, drawn by the wash pump through the
button trap and, where the programme calls for it, the filter block, and returned
to the drum. At the end of a bath the drum extracts and the solvent drains to the
tank nominated by that step. The load is then dried by hot air through the drying
battery and the refrigerated condenser, and finished through the carbon adsorber.

### 5.2 The three tanks

| Tank | Contents | Working volume | Used for | Level fault |
|---|---|---|---|---|
| Tank 1 | Clean distilled solvent, direct from the still | 120 L | Final rinse on all programmes; single bath on delicates | E07 low, E10 overfill |
| Tank 2 | Working solvent, highest soil and residue loading | 130 L | First bath on heavy soil; normally the tank drawn down to charge the still | E08 |
| Tank 3 | Filtered but not distilled solvent | 130 L | First bath on medium soil; second bath on heavy-soil two-bath work | E09 |

### 5.3 Button trap and lint trap

The **button trap** is a stainless basket in the pump suction line, reached
through a hinged lid on the front lower panel, volume 6 L. It catches buttons,
coins, pins and pen caps before they reach the pump. The lid carries an
interlock: if it is not closed and latched the machine will not start a bath and
displays **E14**.

The **lint trap** is a cylindrical housing in the air circuit downstream of the
drum, holding a mesh cartridge, volume 22 L. It catches lint and fibre before the
air reaches the drying battery. A blocked lint trap lengthens drying, raises the
differential across the battery, and is the usual first cause of **E30**.

### 5.4 Filter block

Four spin-on carbon-clay cartridges on a common manifold with a differential
pressure gauge and transducer across the block. Clean differential is 30 to
60 kPa. The controller warns at 180 kPa and stops with **E15** at 220 kPa.

### 5.5 Distillation still

A steam-jacketed vessel of 75 L batch capacity on the left-hand end of the
machine. Solvent is fed from Tank 2 or from the base tank, boiled at
approximately 121 °C with vacuum assistance, and the vapour is condensed and
delivered through the water separator to Tank 1. Non-volatile residue — dyes,
sizing, soil, detergent, fibre — accumulates in the base as "muck" and is removed
by the procedure at 9.6. The jacket is a pressure vessel; its relief valve is set
at 650 kPa and tested annually (10.5).

### 5.6 Water separator

A gravity separator downstream of the still condenser, capacity 12 L.
Perchloroethylene is denser than water, so the solvent falls and the water floats
and decants over a weir to the carbon polisher. A high level or a failed decant
raises **E21**. Water leaving the polisher must be clear; a milky haze means
solvent carryover and spent polisher carbon.

### 5.7 Refrigerated condenser and carbon adsorber

During drying, the circulating air passes over a refrigerated evaporator coil
which condenses solvent vapour out of the airstream and drains it to the water
separator, air-off target 4 to 8 °C. When the outlet air falls below the recovery
threshold the controller opens the path through the carbon adsorber, which strips
residual vapour before the drum is vented at door opening. The adsorber holds
45 kg of carbon and is regenerated by steam desorption every 60 cycles or weekly
(9.8). A failed desorb reports **E34**.

### 5.8 Cage and door interlock

The loading door is held by a pneumatic lock actuated from the control air supply
and monitored by two independent switches, a position switch and a lock-proving
switch. The drum will not turn unless both prove closed, and the lock will not
release until the drum has been stationary for 5 seconds and cool-down and the
vapour purge have completed. Position switch failure reports **E01**; lock
proving failure reports **E02**.

### 5.9 Base tank and sump

Beneath the drum and the tank block is a shallow base tank of 38 L which collects
drips from the drum seal, the button trap, the filter block and the pump glands.
It is pumped out by pump 2 either to Tank 2 or directly to the still. The base
tank level is not displayed; it is emptied automatically at the end of every
cycle. A base tank that is repeatedly full at the start of a cycle indicates a
leak upstream of it, most often a pump gland or a filter housing seal.

The base tank is a confined space and is not entered by site staff (2.8).

### 5.10 Pumps and valve block

Two pumps serve the solvent circuit:

| Pump | Duty | Rating | Delivery |
|---|---|---|---|
| Pump 1 | Wash circuit, drum fill and recirculation | 1.5 kW | 240 L/min at 180 kPa |
| Pump 2 | Transfer, still feed, base tank empty | 1.1 kW | 90 L/min at 220 kPa |

Both are close-coupled centrifugal pumps with solvent-rated mechanical seals.
Neither pump may be run dry; the controller interlocks each against the level of
the tank it is drawing from and reports **E11** or **E12** on overload.

The valve block sits above the tanks and carries the tank selection valves V1,
V2 and V3, the filter bypass valve FV-1, the filter drain valve FV-2, the still
feed valve SV-1 and the distillate return valve SV-2. All are pneumatically
actuated from the control air supply and all fail closed on loss of air.

### 5.11 Fan, drying battery and air circuit

A 3.0 kW centrifugal fan circulates 3,200 m³/h through the closed air loop: drum,
lint trap, refrigerated evaporator, drying battery, and back to the drum. The
drying battery is a finned steam coil of 18.5 m² heating surface controlled by a
modulating steam valve against the inlet air sensor. Two PT100 sensors, one at
the battery outlet (inlet air to the drum) and one at the drum outlet, provide
the control and end-of-cycle signals and report **E31** and **E32** on failure.

Air-side pressure drop rises as the lint trap loads. A machine that used to dry a
P03 load in 18 minutes and now takes 25 is telling you the air circuit is
restricted long before it raises **E30**.

### 5.12 Muck drum station

The still discharges to a drum station on the left-hand end of the machine, at
floor level within the bund, sized for a 20 L steel salvage drum. The station has
a drip tray, a drum clamp and a local exhaust take-off. Drums are labelled as
prescribed industrial waste when sealed, weighed, and recorded at Appendix C
before being moved to the solvent store for collection.

---

## 6. Control panel and display

### 6.1 Panel layout

The XL-800 is controlled by the Union UC-40 microprocessor controller with a
178 mm monochrome graphic display and a sealed membrane keypad, mounted to the
right of the loading door at 1,450 mm above floor level.

| Key | Function |
|---|---|
| START | Begins the selected programme; resumes after a pause |
| STOP / PAUSE | Pauses the programme; second press within 5 s aborts to DRAIN |
| PROG ▲ / PROG ▼ | Steps through programmes P01 to P12 and custom P13 to P20 |
| STEP ▶ | Advances the running programme one step (supervisor level) |
| STILL | Starts and stops distillation independently of the wash cycle |
| DRAIN | Drains the drum to the tank nominated by the current step |
| MENU | Enters the menu tree |
| ENTER | Confirms a selection or a value |
| ESC | Returns one menu level; discards an unconfirmed value |
| RESET | Clears a latched fault after the cause is corrected |
| E-STOP | Mushroom head, latching, see 2.5 |

Indicator lamps: POWER (white), RUN (green), STILL RUN (amber), FAULT (red,
flashing on a latched fault), DOOR LOCKED (blue).

The run screen shows, from the top: programme number and name; current step
number and description; elapsed and remaining time; drum temperature; air inlet
and air outlet temperature; tank in use; filter differential; and still status.
The status line at the foot of the screen shows the most recent fault code and
its message. A latched fault replaces the run screen entirely.

### 6.2 Access levels

| Level | Code | Grants |
|---|---|---|
| Operator | none | Select and run factory programmes, run the still, view logs |
| Supervisor | 2140 | Edit custom programmes, step a running programme, reset non-critical faults, change tank assignments |
| Service | held by technician | Parameter list, calibration, output forcing, factory reset |

The supervisor code is changed by the occupier at commissioning and recorded at
Appendix A. Do not leave the default in service.

### 6.3 Menu tree

```
MENU
 ├─ 1 PROGRAMMES        1.1 Select · 1.2 Edit custom* · 1.3 Copy* · 1.4 Delete custom*
 ├─ 2 STILL             2.1 Start distillation · 2.2 Stop · 2.3 Source tank* · 2.4 Muck cook*
 ├─ 3 TANKS             3.1 Tank levels · 3.2 Transfer tank to tank* · 3.3 Charge from drum*
 ├─ 4 LOGS              4.1 Cycle counter · 4.2 Fault history (50) · 4.3 Still hours · 4.4 Filter hours
 ├─ 5 SETTINGS          5.1 Time and date · 5.2 Language · 5.3 Access codes* · 5.4 Contrast
 └─ 6 SERVICE**         6.1 Parameter list · 6.2 Input status · 6.3 Output test · 6.4 Sensor calibration · 6.5 Counters reset

   *  supervisor access      ** service access only
```

### 6.4 Parameter list

Parameters are held at MENU 6.1 and are altered at service level only. The
defaults below are the values set at commissioning and recorded at Appendix A.

| No | Parameter | Default | Range | Unit |
|---|---|---|---|---|
| P01 | Wash drum speed | 32 | 24 to 40 | rpm |
| P02 | Wash reversal run time | 12 | 6 to 30 | s |
| P03 | Wash reversal pause | 3 | 2 to 10 | s |
| P04 | Distribution speed | 90 | 70 to 110 | rpm |
| P05 | Intermediate extract speed | 350 | 200 to 400 | rpm |
| P06 | Final extract speed | 480 | 300 to 520 | rpm |
| P07 | Extract ramp time | 45 | 20 to 90 | s |
| P08 | Out-of-balance trip level | 6.5 | 3.0 to 9.0 | mm |
| P09 | Out-of-balance retries | 3 | 0 to 5 | count |
| P10 | Dry air inlet setpoint | 65 | 45 to 78 | °C |
| P11 | Dry air inlet maximum | 78 | 60 to 82 | °C |
| P12 | Dry outlet recovery threshold | 22 | 16 to 30 | °C |
| P13 | Cool-down target | 32 | 25 to 40 | °C |
| P14 | Cool-down maximum time | 8 | 3 to 15 | min |
| P15 | Vapour purge time | 90 | 45 to 180 | s |
| P16 | Filter differential warning | 180 | 120 to 200 | kPa |
| P17 | Filter differential trip | 220 | 160 to 260 | kPa |
| P18 | Still boil setpoint | 121 | 115 to 128 | °C |
| P19 | Still overtemperature trip | 138 | 130 to 145 | °C |
| P20 | Still low level trip delay | 30 | 10 to 90 | s |
| P21 | Still condenser outlet alarm | 45 | 35 to 60 | °C |
| P22 | Separator high level delay | 20 | 5 to 60 | s |
| P23 | Refrigeration defrost interval | 45 | 20 to 90 | min |
| P24 | Refrigeration defrost duration | 4 | 2 to 10 | min |
| P25 | Evaporator air-off target | 6 | 2 to 12 | °C |
| P26 | Compressor minimum off time | 180 | 60 to 300 | s |
| P27 | Cooling water flow alarm | 900 | 600 to 1,400 | L/h |
| P28 | Steam pressure low alarm | 480 | 350 to 550 | kPa |
| P29 | Air pressure low alarm | 480 | 400 to 560 | kPa |
| P30 | Carbon desorb interval | 60 | 20 to 120 | cycles |
| P31 | Carbon desorb duration | 25 | 10 to 45 | min |
| P32 | Door unlock delay after stop | 5 | 3 to 20 | s |
| P33 | Filter service alarm hours | 250 | 100 to 500 | h |
| P34 | Still service alarm hours | 500 | 200 to 900 | h |
| P35 | Cycle counter alarm | 1,000 | 500 to 3,000 | cycles |
| P36 | Tank 1 low level alarm | 70 | 40 to 110 | L |
| P37 | Tank 2 low level alarm | 75 | 40 to 120 | L |
| P38 | Tank 3 low level alarm | 75 | 40 to 120 | L |
| P39 | Fault reset lockout count | 3 | 1 to 5 | count |
| P40 | Fault history depth | 50 | 20 to 100 | records |

**CAUTION** — Raising P11 above 78 °C will scorch acetate, triacetate and many
adhesives used in interlinings. Raising P17 above 220 kPa will collapse a filter
cartridge and put clay into the wash circuit. Lowering P15 shortens the vapour
purge and puts solvent into the plant air at door opening.

---

## 7. Programmes

### 7.1 Factory programmes

Twelve factory programmes are held in P01 to P12 and cannot be edited or deleted.
Bath column: T1 = Tank 1 clean distilled, T2 = Tank 2 working, T3 = Tank 3
filtered.

| No | Name | Fabric class | Bath | Temp | Extract | Dry | Cool |
|---|---|---|---|---|---|---|---|
| P01 | Delicate Silk | Silk, fine acetate, chiffon | T1 5 min | 22 °C | 300 rpm 2 min | 12 min at 52 °C | 6 min |
| P02 | Delicate Wool | Wool, cashmere, fine knits | T1 6 min | 24 °C | 350 rpm 2 min | 14 min at 55 °C | 6 min |
| P03 | Standard Wool Suiting | Wool suits, jackets, trousers | T3 6 min + T1 4 min | 26 °C | 480 rpm 3 min | 18 min at 62 °C | 5 min |
| P04 | Standard Synthetic | Polyester, viscose, blends | T3 7 min + T1 4 min | 26 °C | 480 rpm 3 min | 16 min at 62 °C | 5 min |
| P05 | Standard Cotton | Cotton, linen, drill | T3 8 min + T1 4 min | 28 °C | 480 rpm 4 min | 20 min at 68 °C | 5 min |
| P06 | Formal Wear | Dinner suits, gowns, taffeta | T1 6 min | 24 °C | 350 rpm 2 min | 15 min at 55 °C | 7 min |
| P07 | Heavy Soil Two-Bath | Workwear, chef whites | T2 10 min + T3 6 min + T1 4 min | 30 °C | 480 rpm 4 min | 24 min at 68 °C | 5 min |
| P08 | Uniform and Corporate | Corporate uniforms, blazers | T3 8 min + T1 4 min | 28 °C | 480 rpm 3 min | 18 min at 64 °C | 5 min |
| P09 | Refresh | Lightly worn, odour only | T1 3 min | 22 °C | 350 rpm 2 min | 10 min at 55 °C | 5 min |
| P10 | Curtains and Drapes | Lined and unlined curtains | T3 7 min + T1 5 min | 26 °C | 300 rpm 3 min | 22 min at 60 °C | 8 min |
| P11 | Bridal and Beaded | Beaded, sequinned, trimmed | T1 4 min, no reversal | 22 °C | 250 rpm 2 min | 14 min at 48 °C | 8 min |
| P12 | Rewash / Spot Return | Any, second pass | T1 6 min | 24 °C | 480 rpm 3 min | 16 min at 60 °C | 5 min |

**NOTE** — P11 is the lowest-agitation, lowest-temperature programme. Beaded and
sequinned work that will not survive P11 must go to the hydrocarbon machine
instead. Adhesive-set stones will release at any perchloroethylene temperature
and should not be run in this machine at all.

### 7.2 Programme step structure

Every programme is built from the same nine step types, in this order:

1. Fill from the nominated tank to level.
2. Wash, drum reversing at the P01 to P03 values, for the bath time.
3. Drain to the nominated tank, through the filter where the step calls for it.
4. Repeat 1 to 3 for each additional bath.
5. Intermediate extract at P05.
6. Final extract at P06 with ramp P07.
7. Dry, inlet air controlled to the programme setpoint, until the outlet reaches
   P12.
8. Cool-down to P13, or until P14 expires.
9. Vapour purge for P15, then door unlock.

A step may be skipped at supervisor level with STEP ▶, but the extract, purge and
door unlock steps cannot be skipped on any programme.

### 7.3 Creating and editing a custom programme

Custom programmes occupy P13 to P20. Supervisor access is required.

1. MENU → 1 PROGRAMMES → 1.3 Copy programme.
2. Select the factory programme closest to what you need as the source.
3. Select a free destination from P13 to P20. If none is free, delete one at 1.4.
4. Press ENTER. The copy is made and the display returns to 1 PROGRAMMES.
5. Select 1.2 Edit custom programme and choose the new number.
6. Edit the name with PROG ▲ and PROG ▼ to change a character and STEP ▶ to move
   to the next. Sixteen characters maximum.
7. Step through each parameter with ENTER; change the value with PROG ▲ and
   PROG ▼. The controller will not accept a value outside the range at 6.4.
8. Press ESC. The display asks SAVE? Press ENTER to save or ESC to discard.

**CAUTION** — Test every new programme on a ballast load before running customer
work on it. Record the programme, its purpose and the date it was created in the
plant log.

To edit an existing custom programme, start at step 5. Factory programmes P01 to
P12 cannot be edited; the controller displays PROTECTED and returns.

Custom programmes are lost if a factory reset is performed at service level, so
the written record in the plant log is the only reliable copy. Record for each
custom programme: the number, the name, the source programme it was copied from,
every value changed from the source, the fabric class it is intended for, and the
date and initials of the person who created it.

---

## 8. Daily operation

### 8.1 Start of day

1. Confirm the plant room ventilation is running, steam at the machine reads at
   least 550 kPa and air at least 600 kPa.
2. Open the cooling water isolating valve and confirm flow at the sight
   indicator.
3. Turn on the wall isolator, then the panel switch, and wait for the run screen.
4. Check MENU 3.1 Tank levels. A tank below its low mark must be made up before
   work starts (9.2).
5. Check the filter differential. Above 180 kPa, change the cartridges before
   starting (9.4). Check the separator sight glass and decant if the interface is
   above the upper mark (9.7).
6. Empty the button trap, close and latch the lid, confirm E14 clears. Check the
   lint trap and clear any visible fibre.
7. Review the fault history at MENU 4.2 for anything logged overnight.
8. Record the checks on the weekly log sheet (Appendix B).

### 8.2 Load weights by garment class

Overloading is the most common cause of poor cleaning, long drying times and
out-of-balance faults. The figures below are the maximum for a 25 kg drum.

| Garment class | Average dry weight | Maximum pieces per load |
|---|---|---|
| Two-piece wool suit | 1.6 kg | 15 |
| Wool jacket alone | 0.9 kg | 27 |
| Trousers, wool | 0.5 kg | 50 |
| Skirt, lined | 0.4 kg | 60 |
| Dress, day | 0.5 kg | 48 |
| Dress, formal or gown | 1.4 kg | 12, on P06 or P11 |
| Overcoat, wool | 2.2 kg | 11 |
| Shirt or blouse, dry clean only | 0.25 kg | 90 |
| Tie | 0.06 kg | 40 in a net, with other work |
| Curtain, lined, per m² | 0.75 kg | to 22 kg total on P10 |
| Chef jacket or workwear top | 0.6 kg | 40, on P07 |
| Doona cover, single | 1.2 kg | 18 |

**NOTE** — Never fill the drum by volume alone. Bulky low-density work such as
curtains and puffer garments reaches the volume limit well before the weight
limit; in that case the volume limit governs. The drum should be no more than
two-thirds full at rest, and a load that has to be pushed in to fit is
overloaded.

**NOTE** — Weigh the load. Estimating by eye is the usual reason a plant runs
E05 several times a week. A platform scale at the loading door pays for itself in
avoided rewashes.

### 8.3 Loading rules

- Classify by fabric, colour and soil level. Do not mix classes to make a load.
- Empty every pocket; check cuffs and turn-ups.
- Remove or protect pearlised and painted buttons, plastic buckles, adhesive name
  tags, foam shoulder pads of unknown type and PVC trims.
- Beaded, sequinned and heavily trimmed items go to P11 or to the hydrocarbon
  machine. Pre-spot before loading, not after.
- Free water on garments must be below 2% of load weight. Damp goods drive water
  into the solvent, load the separator, and cause dye bleed and shrinkage.
- Load a mix of large and small pieces so the load distributes. Ten identical
  heavy coats will trip **E05**.
- Close the door firmly until the lock proves and the DOOR LOCKED lamp lights.

### 8.4 Running a cycle

1. Select the programme with PROG ▲ and PROG ▼ and confirm the name on the
   display matches the work in the drum.
2. Press START. The RUN lamp lights and the door lock proves. Do not leave the
   machine unattended during the first bath; knocking or rumbling means the load
   has not distributed.
3. Normal progress for P03 is FILL T3, WASH, DRAIN T3, FILL T1, WASH, DRAIN T1,
   EXTRACT, DRY, COOL, PURGE, END.
4. To interrupt, press STOP once; the drum stops and the programme holds. Press
   START to resume. Two presses within 5 seconds abort and drain the drum to the
   tank of the current step.
5. At END the display shows UNLOAD and the door unlocks after the purge.

### 8.5 Interrupting and aborting

A programme paused with STOP holds the drum, keeps the door locked and keeps the
solvent where it is. It may be held for up to 10 minutes without effect on the
work. Beyond that, drain the bath and restart, because garments standing in
static solvent will show local dye bleed and pressure marks.

A programme aborted with two presses of STOP drains the drum to the tank of the
current step and stops. The load is wet with solvent, is not extracted and is not
dry. It must not be removed from the drum. Select P12 and run it through to a
proper extract, dry and cool-down before opening the door.

### 8.6 Unloading

1. Wait for the lock to release. Do not force the door.
2. Open the door and stand aside a few seconds before reaching in; residual
   vapour will fall out of the drum.
3. Unload directly to a trolley. Do not leave a finished load in the drum; heat
   retained in the goods drives residual solvent into the plant air.
4. Check two or three items for odour. A definite solvent smell means a short dry
   or a short cool-down; do not deliver the load, re-run on P12.
5. Move the load to the finishing area within 10 minutes.

### 8.7 End of day shutdown

1. Complete the last cycle. Do not leave a load in the drum overnight.
2. Empty and close the button trap; clean the lint trap.
3. Run the still if the day's work calls for it (9.6). The still may run
   unattended only if the plant is otherwise secure and the still was proven at
   the last quarterly service.
4. Decant the water separator if required.
5. Check tank levels and record them on the weekly log sheet.
6. Turn the panel switch OFF once the still has finished.
7. Close the steam isolating valve, then the cooling water isolating valve.
8. Turn the wall isolator OFF unless the still is still running.
9. Leave ventilation running for 15 minutes after shutdown.
10. Leave the loading door ajar on its first latch so the drum dries.

---

## 9. Solvent management

### 9.1 Receiving solvent

Solvent is delivered in 200 L steel drums by Solvex Chemicals Australia Pty Ltd
and stored upright on a bunded pallet in the locked solvent store off the rear
laneway. On delivery check the drum for damage and a legible UN 1897 label,
record the drum number, date and quantity at Appendix C, and file the current
SDS. A full drum weighs about 324 kg; use a drum trolley.

### 9.2 Charging the machine

1. Confirm which tank requires the charge at MENU 3.1.
2. Use MENU 3.3 Charge from drum, or isolate the machine if charging by hand pump
   into the fill point. Wear glasses, gauntlets and apron.
3. Insert the drum pump suction tube fully. Connect the delivery hose to the
   charge point on the left of the machine and lock the coupling.
4. Charge slowly, watching the tank level display. Stop at the working level at
   3.8. Filling past maximum reports **E10**.
5. Disconnect, cap the drum, return the pump to its stand in the bund.
6. Record litres, tank, date and operator at Appendix C.

**NOTE** — 200 L of perchloroethylene weighs approximately 324 kg. Do not attempt
to move a full drum without a drum trolley, and never lift a drum by hand.

### 9.3 Mileage

Mileage is the mass of garment cleaned per litre of solvent consumed, and is the
single most useful measure of whether the machine is tight and whether the still
is doing its job.

Mileage = total garment mass cleaned in the period ÷ litres of solvent purchased
in the period. Use the same period for both figures, and use purchases rather
than estimated consumption, because purchases are the number the supplier and the
regulator will both have.

| Result | Interpretation |
|---|---|
| Above 500 kg/L | Excellent; check the figures are real before believing them |
| 400 to 500 kg/L | Normal for this machine on this work mix |
| 300 to 400 kg/L | Investigate separator carryover, short cool-down, muck not cooked out |
| Below 300 kg/L | A leak, a failed condenser, or a saturated adsorber. Call a technician |

Mileage is calculated monthly from the purchase log and the cycle counter and
recorded at Appendix C.

### 9.4 Filter operation and cartridge change

Solvent passes through the filter block on the first bath of every programme that
draws from Tank 2 or Tank 3; the final rinse from Tank 1 bypasses the filter.
Clean differential is 30 to 60 kPa. Change at 180 kPa or 250 running hours (P33),
whichever comes first.

**WARNING** — Cartridges are saturated with solvent and are prescribed
industrial waste. Full PPE per 2.3.

1. Complete the running cycle. Isolate per 2.6.
2. Drain the filter housings back to Tank 2 through valve FV-2. Allow 10 minutes
   and place a drip tray under the block.
3. Release each cartridge with the strap wrench, invert into a lined drum, and
   drain for at least 30 minutes before sealing.
4. Wipe the sealing faces. Smear the new gasket with clean solvent, not oil, and
   fit hand tight plus one third of a turn. Do not use the wrench to tighten.
5. Restore, open FV-2, run a fill and check every seal for leaks.
6. Reset the filter hours at MENU 6.5 and consign the used cartridges to
   Sovereign Environmental Services under a waste tracking record.

### 9.5 Running the still

The still is run daily on ordinary trade, and after every heavy-soil day.

1. Confirm the still is empty of muck from the previous cook (9.7).
2. Confirm cooling water is on and flowing.
3. Press STILL, or MENU 2.1 Start distillation.
4. The controller opens the feed valve and fills to 75 L from the tank set at
   MENU 2.3, normally Tank 2.
5. The steam valve opens and the charge heats to P18, 121 °C.
6. Distillate runs through the water separator to Tank 1 at approximately
   22 L/h; a 75 L batch takes about 3 hours 20 minutes.
7. The still stops on low level (P20) and closes the steam valve. Allow it to
   cool before any access.

Distil at least 25 litres per 100 kg of garment cleaned. On a normal week at this
plant, cleaning about 1,050 garments, that is one full batch most days. On a
peak week it is a batch every day and a second batch on the heaviest days.

The still may be left to complete unattended only if the plant is otherwise
secure, the still was proven at the last quarterly service, and the cooling water
supply cannot be isolated by another user while the still is running.

### 9.6 Muck cooking and residue removal

Muck cooking drives the last of the solvent out of the residue so that what leaves
the plant is as dry as it can be made.

1. Run the still to low level as at 9.5.
2. Select MENU 2.4 Muck cook cycle. The controller closes the feed, holds steam
   on, and applies vacuum assistance for 25 minutes at reduced jacket pressure.
3. Close the steam isolating valve and let the still cool below 40 °C — at least
   90 minutes. Do not rush it.
4. Isolate per 2.6 and fit lockout.
5. Put on full PPE per 2.3 including A2 respirator.
6. Open the still access door, stand to one side, and allow 5 minutes of local
   exhaust before approaching.
7. Rake the residue into a lined 20 L steel drum below the opening. Do not put
   any part of your body through the opening; see 2.8.
8. Scrape the walls and the base coil with the flat scraper. Residue baked onto
   the coil is the usual cause of a slow still.
9. Seal, label and weigh the drum. Record it at Appendix C.
10. Inspect the door gasket, replace if flattened or cut, close and latch.
11. Remove lockout, restore services, run one distillation batch and confirm
    normal rate before returning the machine to service.

Typical residue production at this plant is 18 to 24 kg per month. Residue is
collected by Sovereign Environmental Services Pty Ltd under the supply agreement
with Solvex Chemicals Australia, and every collection must produce a waste
tracking record which is filed with the machine records.

A still that produces very little residue is not necessarily clean; it is more
often a still that is not being charged deeply enough, or one where the muck is
baking onto the coil instead of being raked out. Compare residue weight against
solvent purchased and garment throughput each month.

### 9.7 Water separator

Check the sight glass daily. The interface between the solvent below and the
water above should sit between the marks. To decant, open the water decant valve
slowly and let the water run to the polisher until the interface reaches the
lower mark. Water leaving the polisher must be clear; milky water means solvent
carryover — stop, change the polisher carbon, and do not discharge. Separator
water is not discharged to sewer at this site; it is collected in the labelled
20 L container in the bund and removed as waste.

### 9.8 Carbon adsorber regeneration

The adsorber is desorbed every 60 cycles or weekly, whichever is sooner (P30).
The controller prompts DESORB DUE. Confirm steam and cooling water are available,
select the prompt and press ENTER. Steam passes through the bed for P31,
25 minutes, and the steam and desorbed solvent condense to the water separator.
The bed is then dried by warm air for 10 minutes. A failed desorb reports
**E34**. Carbon is replaced annually, or sooner if mileage falls below 300 kg/L
and no other cause is found.

### 9.9 Solvent testing

| Test | Frequency | Method | Acceptable result |
|---|---|---|---|
| Acid acceptance | Monthly | Solvex TK-4 field kit | Above 0.10% as NaOH |
| Water content | Monthly | Field kit | Below 100 ppm, no visible haze |
| Non-volatile residue, Tank 2 | Quarterly | 100 mL evaporation dish | Below 2.0% w/v |
| Colour | Daily, visual | Sample jar against white card | Clear to pale straw |
| Separator water pH | Weekly | Test strip | 6.0 to 8.5 |

Low acid acceptance means the solvent is turning acidic and will corrode the
still, the pumps and the drum. Add stabiliser at the supplier's dose rate and
retest after 24 hours. If acid acceptance does not recover, the charge must be
replaced.

### 9.10 Record keeping

The following are kept for a minimum of five years: the solvent purchase log; the
distillation log with batches, litres and still hours; the residue log with drum
number, weight and waste tracking record number; the filter change log; solvent
test results; and fault history downloads and technician service reports. These
records also support the mileage calculation at 9.3 and any enquiry from EPA
Victoria or WorkSafe Victoria.

---

## 10. Maintenance schedule

Times given are for a competent person with the tools at hand. They do not
include isolation, which adds about 10 minutes to any task requiring lockout.
Every completed task is initialled on the weekly log sheet at Appendix B or, for
the longer intervals, on the technician's service report.

### 10.1 Daily

| Task | Tool | Time |
|---|---|---|
| Empty button trap | Gloves, bucket | 3 min |
| Clean lint trap | Gloves, brush | 5 min |
| Check tank levels at MENU 3.1 | None | 1 min |
| Check filter differential on run screen | None | 1 min |
| Check separator interface, decant if required | None | 4 min |
| Check pump seals and door gasket for leaks | Torch | 3 min |
| Check the bund floor for liquid or staining | Torch | 2 min |
| Wipe door gasket and sill | Cloth | 2 min |
| Check solvent colour against a white card | Sample jar | 2 min |
| Start still per 9.5 | None | 5 min |
| Record checks on weekly log sheet | Pen | 3 min |

### 10.2 Weekly

| Task | Tool | Time |
|---|---|---|
| Clean drum interior, check lifters and welds | Torch, cloth | 10 min |
| Clean lint trap housing and gasket seat | Brush, cloth | 10 min |
| Check door interlock, both switches | None | 5 min |
| Test both emergency stops, confirm E38, reset | None | 5 min |
| Carbon adsorber desorb per 9.8 | None | 5 min |
| Check air regulator at 550 kPa, drain filter bowl | 10 mm spanner | 5 min |
| Check steam traps, drying battery and still | Contact thermometer | 10 min |
| Check cooling water flow against 3.7 | None | 5 min |
| Check cooling water return sight glass for haze | Torch | 3 min |
| Blow down the steam line strainer | Bucket, gloves | 8 min |
| Check separator water pH | Test strip | 3 min |
| Clean machine exterior and bund floor | Cloth, absorbent | 15 min |
| Check spill kit contents and PPE cabinet | None | 5 min |

### 10.3 Monthly

| Task | Tool | Time |
|---|---|---|
| Acid acceptance and water content test | Solvex TK-4 kit | 20 min |
| Calculate mileage per 9.3 | Purchase log, counter | 15 min |
| Clean still condenser tubes externally | Brush | 30 min |
| Check drum bearing for noise and end float | Dial gauge | 20 min |
| Check drive belt tension and condition | Tension gauge | 20 min |
| Inspect solvent hoses for swelling or hardening | Torch | 15 min |
| Inspect all flanged and threaded solvent joints | Torch, spanner | 20 min |
| Check bund coving and epoxy for cracking | Torch | 10 min |
| Grease door hinge and lock pivot | Solvent-resistant grease | 10 min |
| Download fault history at MENU 4.2 and file | Pen | 10 min |
| Check PPE stock and respirator cartridge dates | None | 10 min |
| Check drum for out-of-round and lifter security | Straight edge | 15 min |

### 10.4 Quarterly

| Task | Tool | Time |
|---|---|---|
| Non-volatile residue test, Tank 2 | Evaporation dish, scales | 45 min |
| Still internal inspection and coil descale | Scraper, torch, PPE | 2 h |
| Refrigeration leak test, all joints | Electronic leak detector | 45 min |
| Check superheat and subcooling | Gauge set, thermometer | 45 min |
| Clean refrigeration condenser water side | Descale kit | 1 h 30 min |
| Check and reset high and low pressure switches | Gauge set | 30 min |
| Inspect electrical enclosure, tighten terminations | Torque screwdriver | 45 min |
| Test RCD operation | Test button and meter | 10 min |
| Verify inverter parameters against Appendix A | Panel | 20 min |
| Check drum suspension springs and dampers | Torch, spanner | 40 min |
| Replace button and lint trap gaskets if flattened | Spanner | 30 min |
| Check level probe calibration, all three tanks | Dip stick, panel | 40 min |
| Prove the still low-level trip by test | Panel, PPE | 30 min |

### 10.5 Annual

| Task | Tool | Time |
|---|---|---|
| Replace all four filter cartridges regardless of hours | Strap wrench | 45 min |
| Replace carbon adsorber charge, 45 kg | Drum trolley, PPE | 3 h |
| Replace water polisher carbon | Gloves, PPE | 45 min |
| Replace loading door gasket | Adhesive, trim knife | 1 h |
| Replace still access door gasket | Trim knife | 45 min |
| Replace pump seals, pumps 1 and 2 | Seal kit, pullers | 3 h |
| Still jacket relief valve test and certification | Test rig | 1 h |
| Pressure vessel external inspection to AS 3788 | Inspector | 2 h |
| Calibrate temperature sensors at MENU 6.4 | Reference thermometer | 1 h 30 min |
| Calibrate filter differential transducer | Reference gauge | 30 min |
| Verify all interlocks and record at Appendix A | None | 45 min |
| Insulation resistance test, drives disconnected | 500 V tester | 45 min |
| Full solvent charge assay | Laboratory sample | 30 min plus lab |
| Inspect drum shaft, seal and bearing housing | Dial gauge, torch | 1 h 30 min |
| Update machine record and review this schedule | Pen | 30 min |

**TECHNICIAN** — The relief valve test, the AS 3788 external inspection, the
insulation resistance test and all refrigeration work are technician tasks. At
this site the pressure vessel inspection is performed by Goldfields Plant
Inspection Services Pty Ltd, who also inspect the boiler.

### 10.6 Consumable replacement intervals

| Item | Interval |
|---|---|
| Filter cartridges | 250 running hours or 180 kPa differential, and annually |
| Carbon adsorber charge | 12 months |
| Water polisher carbon | 6 months, or immediately on haze |
| Loading door gasket | 12 months |
| Still access door gasket | 12 months |
| Button trap gasket | 6 months |
| Lint trap gasket | 6 months |
| Filter housing gaskets | At every second cartridge change |
| Pump mechanical seals | 12 months |
| Drive belt | 24 months |
| Steam trap capsule, drying battery | 24 months |
| Line strainer screens | 12 months |
| Respirator cartridges | 30 days in use, or on breakthrough odour |

### 10.7 What to do if a scheduled task is missed

A missed daily task is caught up the same day. A missed weekly task is caught up
before the next production day. A missed quarterly or annual task must be
recorded in the machine record with the reason and the date it was completed; the
service history must show a continuous record, because a gap in it will be
treated as a lapse in maintenance under 13.4.

---

## 11. Fault codes

### 11.1 How the controller reports a fault

Faults are either **warnings**, which let the cycle finish and flash the FAULT
lamp, or **latched faults**, which stop the machine, hold the door locked until
it is safe to release, and replace the run screen with the code and message.
Every fault is written to the fault history at MENU 4.2 with a time stamp and the
step that was running.

Clear a latched fault by correcting the cause and pressing RESET. If the code
returns immediately, the cause has not been corrected. Do not press RESET
repeatedly; three resets on the same code within one hour lock the code out and
require a technician.

The Technician column means: N — an operator may investigate and clear it;
Y — stop and call a technician; N/Y — an operator may attempt the listed check
once, and if the fault returns it becomes a technician call.

### 11.2 Fault code table

| Code | Message shown | Likely cause | Operator check | Tech |
|---|---|---|---|---|
| E01 | DOOR OPEN | Door not closed, or position switch not made | Close the door firmly; check nothing is trapped in the gasket; check the switch striker is not bent | N/Y |
| E02 | DOOR LOCK FAULT | Lock did not prove closed, or low air to the lock cylinder | Check air at least 600 kPa; check the lock pin moves freely | N/Y |
| E03 | DRUM MOTOR OVERLOAD | Overloaded drum, seized bearing, or motor fault | Reduce the load; with power isolated, turn the drum by hand and feel for drag | Y |
| E04 | INVERTER FAULT | Drum drive inverter tripped; sub-code shown in brackets | Record the sub-code; isolate for 60 s and restore | Y |
| E05 | OUT OF BALANCE | Load has not distributed for final extract | Open, redistribute by hand, resume from extract; reduce load size | N |
| E06 | DRUM SPEED SENSOR | No pulse from the speed sensor, or sensor gap wrong | None. Do not run | Y |
| E07 | TANK 1 LOW | Tank 1 below working level | Run a distillation batch; check for a leak at the Tank 1 outlet | N |
| E08 | TANK 2 LOW | Tank 2 below working level | Charge from drum per 9.2, or transfer from Tank 3 | N |
| E09 | TANK 3 LOW | Tank 3 below working level | Transfer from Tank 2 through the filter; check the filter is not blocked | N |
| E10 | TANK 1 OVERFILL | Level above maximum; still overrun or manual overcharge | Stop the still; transfer to Tank 2 at MENU 3.2; check the Tank 1 probe for coating | N/Y |
| E11 | PUMP 1 OVERLOAD | Wash pump over current; blocked button trap or seized pump | Empty the button trap; check the suction valve is open | N/Y |
| E12 | PUMP 2 OVERLOAD | Still feed pump over current or dry running | Check source tank level; check the still feed strainer | N/Y |
| E14 | BUTTON TRAP OPEN | Button trap lid interlock not made | Close and latch the lid fully; clean the gasket seat; check the latch cam | N |
| E15 | FILTER PRESSURE HIGH | Differential above 220 kPa; cartridges loaded or collapsed | Change all four cartridges per 9.4; reset filter hours | N |
| E16 | FILTER SENSOR FAULT | Differential transducer open or short circuit | None. Machine runs on the time-based filter alarm only | Y |
| E17 | STILL OVERTEMP | Still above 138 °C; low charge, scaled coil or failed steam valve | Stop the still, let it cool, check for muck build-up on the coil | N/Y |
| E18 | STILL LOW LEVEL | Still level below minimum with steam on | Confirm the batch has finished; check the feed valve and source tank | N |
| E19 | STILL STEAM VALVE | Steam valve did not prove open or closed | Check steam supply on and at pressure; check the valve air signal | Y |
| E20 | STILL CONDENSER HOT | Condenser outlet above 45 °C; cooling water fault | Check cooling water on, strainer clean, supply below 26 °C | N/Y |
| E21 | SEPARATOR HIGH LEVEL | Separator above high level; decant blocked or too much water in the system | Decant per 9.7; check the decant line and the polisher for blockage | N |
| E22 | SEPARATOR SENSOR | Separator level probe faulty or coated with residue | Clean the probe with clean solvent | N/Y |
| E24 | REFRIG HIGH PRESSURE | High pressure switch tripped at 2,700 kPa; water fault or fouled condenser | Check cooling water flow and temperature; clean the strainer | N/Y |
| E25 | REFRIG LOW PRESSURE | Low pressure switch tripped at 40 kPa; lost charge or iced evaporator | Check the evaporator is not iced; do not top up refrigerant | Y |
| E26 | COMPRESSOR OVERLOAD | Compressor motor protector open | Allow 30 min to cool; if it repeats, stop | Y |
| E27 | DEFROST FAULT | Evaporator did not clear within the defrost period | Check air flow; check the lint trap is clean | N/Y |
| E29 | COOLING WATER LOW | Flow below 900 L/h | Open the isolating valve fully; clean the strainer; check supply pressure | N |
| E30 | DRY TEMP NOT REACHED | Inlet air below setpoint for more than 6 minutes | Check steam pressure, lint trap, steam trap and battery drainage | N/Y |
| E31 | INLET SENSOR FAULT | Inlet air temperature sensor open or short | None. Do not run | Y |
| E32 | OUTLET SENSOR FAULT | Outlet air temperature sensor open or short | None. Do not run | Y |
| E34 | CARBON DESORB FAULT | Desorb did not complete; steam or condensate fault at the adsorber | Check steam pressure; check the adsorber condensate line is clear | N/Y |
| E35 | STEAM PRESSURE LOW | Below 480 kPa at the machine | Check the boiler, the header valve and the machine isolating valve | N |
| E36 | AIR PRESSURE LOW | Below 480 kPa at the machine | Check compressor and dryer; drain the filter bowl; check for a line leak | N |
| E38 | EMERGENCY STOP | An emergency stop button is latched in | Establish why it was pressed, correct it, twist to release, press RESET | N |
| E40 | CONTROLLER MEMORY | Memory battery low or checksum error; custom programmes may be lost | Record custom programme settings before power down | Y |

### 11.3 Warning and prompt codes

Warning codes do not stop the machine. They flash the FAULT lamp, appear on the
status line, and are written to the fault history. They are the machine telling
you that something is drifting and will become a latched fault if it is ignored.

| Code | Message shown | Meaning | Action |
|---|---|---|---|
| A01 | FILTER DUE | Differential above 180 kPa (P16) | Change cartridges at the end of the day (9.4) |
| A02 | FILTER HOURS | 250 running hours reached (P33) | Change cartridges and reset hours at MENU 6.5 |
| A03 | DESORB DUE | 60 cycles or 7 days since last desorb (P30) | Run the desorb cycle (9.8) |
| A04 | STILL HOURS | 500 still hours since last service (P34) | Book the quarterly still inspection |
| A05 | TANK 1 LOW WARN | Tank 1 below P36 but above trip | Run a distillation batch |
| A06 | TANK 2 LOW WARN | Tank 2 below P37 but above trip | Charge from drum, or transfer |
| A07 | TANK 3 LOW WARN | Tank 3 below P38 but above trip | Transfer from Tank 2 through the filter |
| A08 | SEPARATOR HIGH | Separator above the upper mark, not yet at trip | Decant (9.7) |
| A09 | COOL WATER WARM | Supply above 24 °C but below the alarm | Check the tower or the supply; expect E24 on a hot afternoon |
| A10 | STEAM LOW WARN | Steam between 480 and 520 kPa | Check boiler loading and the header valve |
| A11 | DRY TIME LONG | Drying step exceeded its nominal time by 25% | Check the lint trap and the steam trap before the next load |
| A12 | CYCLE COUNT | 1,000 cycles since the counter was reset (P35) | Book the scheduled service |
| A13 | DOOR CYCLES | 5,000 door operations since gasket change | Inspect and replace the door gasket |
| A14 | MEMORY BATTERY | Controller battery below threshold | Book replacement before the next annual service |

### 11.4 Inverter sub-codes shown with E04

E04 is always displayed with a sub-code in brackets, for example E04 (OC2). The
sub-code is the drum drive inverter's own diagnosis and is the first thing the
technician will ask for. Record it before power is removed, because it is not
retained in the controller fault history.

| Sub-code | Inverter reports | Usual cause |
|---|---|---|
| OC1 | Overcurrent at constant speed | Mechanical drag, seized bearing, load jammed against the lifters |
| OC2 | Overcurrent during acceleration | Ramp too short for the load, or an overloaded drum |
| OC3 | Overcurrent during deceleration | Braking resistor failed or disconnected |
| OU1 | DC bus overvoltage | Braking resistor failed, or supply voltage high |
| LU1 | DC bus undervoltage | Supply dip, loose incoming termination, failed contactor pole |
| OH1 | Inverter heatsink over temperature | Blocked cooling fins, failed enclosure fan, ambient above 35 °C |
| OL1 | Motor overload, thermal model | Sustained overloading, or a motor winding fault |
| PHL | Input phase loss | Blown supply fuse or open pole at the isolator |
| EF1 | Earth fault at the output | Damaged motor cable or a motor winding to earth |
| STO | Safe torque off active | Emergency stop, door circuit open, or a broken safety wire |

### 11.5 The eight most common faults in detail

**E05 — OUT OF BALANCE.** By a wide margin the most frequent stop on this
machine. The controller measures drum displacement during the extract ramp and
aborts above 6.5 mm (P08), retrying three times (P09) before latching. It is
almost always the load: identical heavy items such as overcoats or lined curtains
that have balled on one side, an overloaded drum that cannot tumble, one very
heavy item among light items, or a load that went in wet. Open the door, pull the
load apart, spread it around the drum wall, close and press START to resume from
the extract step. If E05 recurs on properly made loads across several programmes,
the fault is mechanical: check the suspension springs and dampers (10.4) and
check the feet are still level and locked. A machine that has walked on its feet
trips E05 on loads it used to handle.

**E15 — FILTER PRESSURE HIGH.** The differential has reached 220 kPa (P17).
Normally the cartridges have simply done their work. Change all four together per
9.4 — changing one or two gives uneven flow and short life on the new ones — and
reset the filter hours at MENU 6.5. If the differential is high again within a
week, find out why they are loading so fast: heavy soil run without a pre-bath,
muck not cooked out so non-volatile residue is circulating, or a collapsed
cartridge putting clay into the circuit. High differential with the pump running
and no flow at the drum can be an airlock; bleed at the vent screw on top of the
manifold. High differential with the pump off is a transducer fault, not a filter
fault, and should present as E16.

**E17 — STILL OVERTEMP.** The still has exceeded 138 °C (P19). Perchloroethylene
boils at 121 °C and the still cannot exceed that by much while there is liquid in
it, so E17 nearly always means the still has run low or dry with steam still
applied. Check first that the batch simply finished and low level detection
failed — see E18. Then check the coil: a coil buried in baked muck transfers heat
poorly to the liquid and well to the vessel wall where the sensor sits, driving
wall temperature up while the charge is still boiling. That is the second most
common cause and is corrected by a proper muck cook and coil scrape (9.6). Third,
a steam valve failed open will keep heating after the controller has commanded it
shut; that is a technician call and shows E19 in the same fault history. Do not
simply reset and restart. Let it cool, look inside, and find out why.

**E21 — SEPARATOR HIGH LEVEL.** Water is arriving faster than it leaves, or it is
not leaving at all. Check the decant valve is open and the line to the polisher is
not blocked with lint or residue. Check the polisher itself; saturated carbon will
back up. Then ask where the water is coming from. A separator that fills quickly
on a plant that was fine last month usually means water is entering with the work
— goods loaded damp, or spots wetted out and loaded without drying. It can also
mean a leaking cooling water tube in the still condenser, which puts water
straight into the solvent stream, shows as rising water content in the monthly
test (9.9), and is a technician repair. Never clear E21 by discharging the
separator to drain.

**E24 — REFRIG HIGH PRESSURE.** The high pressure switch has opened at 2,700 kPa.
The condenser is water cooled, so the first check is always the cooling water: is
the isolating valve fully open, is the strainer clean, is the supply below 26 °C,
is the flow at least 1,150 L/h. In a Bendigo summer, supply water temperature is
the usual culprit and E24 appears on hot afternoons and disappears on cool
mornings. Second, a fouled or scaled condenser water side, which is on the
quarterly schedule for this reason. Third, non-condensables in the circuit after a
poor repair, which is a technician matter. The switch is manual reset; reset it
only once the cause is known.

**E30 — DRY TEMP NOT REACHED.** The drying air inlet has failed to reach setpoint
for more than six minutes. Work through it in this order: lint trap blocked, by
far the most common and free to check; steam below 480 kPa at the machine, which
will also raise E35; the drying battery steam trap waterlogged so the battery is
full of condensate and cannot transfer heat — feel the trap, a cold trap on a
running battery is a failed trap; the condensate return blocked or flooded; a
partly closed steam isolating valve, which happens after maintenance; and lastly
battery fins choked with lint on the air side. E30 with long cycle times and poor
mileage is normally the steam trap. E30 only on the heavy programmes is normally
boiler capacity, not the machine.

**E14 — BUTTON TRAP OPEN.** The lid interlock has not made. It stops a bath
starting, so it usually appears first thing in the morning after the trap has
been emptied. Nine times out of ten the lid is closed but not latched hard enough
to compress the gasket and make the switch. Check that no button, coin or pin is
sitting on the gasket seat, wipe the seat clean, and latch firmly. If the lid is
latched and the code stays, the gasket has flattened and the lid no longer travels
far enough to make the switch — a six-monthly replacement item, part UXL-1218. If
a new gasket does not fix it, the switch or its striker is out of adjustment and
needs a technician. Do not tape, wedge or otherwise defeat this switch.

**E35 — STEAM PRESSURE LOW.** Pressure at the machine has fallen below 480 kPa
(P28). Very often this is not a machine fault at all. Check, in order: the machine
isolating valve fully open; the header valve open; the strainer at the machine
clean; the boiler at pressure and firing; and whether the shirt unit, the utility
press or the form finisher is drawing at the same time. A plant that raises E35
every morning at start-up is asking the boiler for more steam than it can supply
from cold, and the answer is to stagger the start of the finishing equipment
rather than to adjust the machine. E35 mid-morning under normal load with the
boiler at pressure points to a partly blocked strainer or a failed regulator on
the header drop.

### 11.6 Other faults worth knowing

**E01 and E02 — door faults.** These two are often confused. E01 says the
controller cannot see the door as closed; E02 says it can see it closed but the
lock did not prove. E01 is usually mechanical: a garment tail caught in the
gasket, a bent striker, or a door that has dropped on its hinge so the switch no
longer makes. E02 is usually pneumatic: air below 600 kPa, a slow-acting 5/2
solenoid, or a lock pin that is dry and sticking. Grease the lock pivot monthly
and E02 largely disappears. Neither code may be cleared by wedging the door or by
taping a switch closed.

**E07, E08 and E09 — tank low.** A tank low code by itself is a housekeeping
matter: distil, transfer or charge, as the table says. A tank low code that keeps
coming back on the same tank is a leak until proven otherwise. Work through the
tank outlet valve, the pump gland, the filter housing seals and the sight glass
fittings with a torch and a clean white cloth, and check the bund floor for
staining. A slow leak inside the bund will not show on the floor of the plant but
will show up in mileage (9.3) within a month.

**E18 — still low level.** In normal running the still stops on low level at the
end of every batch and the code is informational. It matters when it appears
early in a batch, which means either the feed valve did not open, the source tank
was already low, or the level probe is coated. A probe coated with muck reads
liquid when the vessel is nearly empty, which is how E18 becomes E17.

**E22 — separator sensor.** The separator probe sits in a vessel that is, by
design, full of the dirtiest water in the plant. It coats. Clean it with clean
solvent and a soft cloth — never with an abrasive, which scores the probe and
makes it coat faster. If it needs cleaning more often than quarterly, the
polisher is not keeping up.

**E34 — carbon desorb fault.** The desorb cycle needs steam at pressure and a
clear condensate path. The usual failure is a blocked or waterlogged condensate
line from the adsorber, which shows as a desorb that runs but produces no
condensate at the separator. Check the line and the trap first. A desorb that
will not start at all is a steam supply or valve fault and will normally show
E19 or E35 as well. Repeated E34 with everything else correct means the carbon is
spent and no longer releasing what it has adsorbed; replace the charge.

**E40 — controller memory.** The controller holds its parameters, custom
programmes and fault history in battery-backed memory. E40 means the battery is
low or the checksum has failed. The machine will usually still run, but it may
lose custom programmes at the next power down. Write down the custom programme
settings, then book the battery replacement. Do not perform a factory reset to
clear E40; that guarantees the loss it is warning you about.

### 11.7 Escalation, and what to tell the technician

Before you call, have the following ready. A technician who is given all of it on
the phone can usually bring the right part on the first visit.

1. Machine model and serial: Union XL-800, UXL8-2019-0447.
2. The exact code and message on the display, and any sub-code in brackets.
3. What the machine was doing when it stopped: programme number, step, and how
   far into the cycle.
4. Whether there is a load in the drum, and whether it is wet with solvent.
5. The last five entries from the fault history at MENU 4.2.
6. Steam pressure, air pressure and cooling water temperature at the time.
7. Tank levels and filter differential.
8. What has changed recently: a filter change, a service, a new operator, a
   different class of work, a hot week.

If the machine has a load of solvent-wet work locked in it and cannot be run,
tell the technician that on the first call. It changes the priority, because
garments standing in solvent will be damaged and the plant air will load up as
soon as the door is opened.

---

## 12. Consumables and spare parts

Order by part number and quote serial UXL8-2019-0447 with every order.
Recommended holding is what should be on the shelf at this plant. Items shown as
0 are held by the service agent and ordered against a breakdown; lead time on the
controller and the inverter is 10 to 15 working days.

### 12.1 Consumables and spare parts

| Part number | Description | Holding |
|---|---|---|
| UXL-1104 | Filter cartridge, carbon-clay, spin-on (4 required per change) | 8 |
| UXL-1120 | Activated carbon charge, adsorber, 45 kg | 1 |
| UXL-1122 | Water polisher carbon cartridge | 2 |
| UXL-1210 | Loading door gasket, 620 mm | 1 |
| UXL-1214 | Still access door gasket | 1 |
| UXL-1218 | Button trap lid gasket | 2 |
| UXL-1220 | Lint trap door gasket | 2 |
| UXL-1226 | Filter housing gasket set, 4 off | 2 sets |
| UXL-1302 | Pump mechanical seal kit, pump 1 | 1 |
| UXL-1304 | Pump mechanical seal kit, pump 2 | 1 |
| UXL-1410 | Drive belt, drum, 8PK 1750 | 1 |
| UXL-1512 | Steam trap capsule, F&T DN20, drying battery | 1 |
| UXL-1514 | Steam trap, inverted bucket DN15, still jacket | 1 |
| UXL-1610 | Line strainer screen, steam DN25 | 2 |
| UXL-1612 | Line strainer screen, cooling water DN20 | 2 |
| UXL-1704 | Air filter element, control air | 2 |
| SVX-TK4 | Solvex TK-4 acid acceptance and water test kit | 1 |
| SVX-STAB | Solvent stabiliser, 5 L | 1 |
| UXL-2102 | Door interlock position switch | 1 |
| UXL-2104 | Door lock proving switch | 1 |
| UXL-2106 | Door lock pneumatic cylinder | 0 |
| UXL-2110 | Button trap interlock switch | 1 |
| UXL-2202 | Temperature sensor, PT100, air inlet | 1 |
| UXL-2204 | Temperature sensor, PT100, air outlet | 1 |
| UXL-2206 | Temperature sensor, PT100, still wall | 1 |
| UXL-2208 | Filter differential transducer, 0 to 400 kPa | 1 |
| UXL-2210 | Tank level probe, capacitive, any tank | 1 |
| UXL-2212 | Separator level probe | 1 |
| UXL-2302 | Drum speed sensor, inductive, M12 | 1 |
| UXL-2304 | Solenoid valve, steam, DN20, 24 V DC pilot | 1 |
| UXL-2306 | Solenoid valve, solvent, DN32 | 1 |
| UXL-2308 | Air solenoid, 5/2, door lock | 1 |
| UXL-2402 | Contactor, 32 A, 24 V DC coil | 1 |
| UXL-2404 | Control transformer, 400 VA, 400/24 V | 0 |
| UXL-2410 | Drum drive inverter, 5.5 kW | 0 |
| UXL-2502 | Refrigeration high pressure switch, 2,700 kPa manual reset | 1 |
| UXL-2504 | Refrigeration low pressure switch, 40 kPa auto reset | 1 |
| UXL-2602 | Still jacket relief valve, 650 kPa, certified | 0 |
| UXL-2704 | Drum suspension damper | 0 |
| UXL-2706 | Drum suspension spring set | 0 |
| UXL-2802 | UC-40 controller, complete with programme set | 0 |

### 12.2 Tools kept at the machine

| Tool | Used for |
|---|---|
| Filter strap wrench, 120 mm | Filter cartridge change (9.4) |
| Flat still scraper, 900 mm handle | Muck removal (9.6) |
| Still rake, 900 mm handle | Muck removal (9.6) |
| Drum trolley, 350 kg | Solvent drums and carbon drums |
| Contact thermometer, 0 to 200 °C | Steam trap checks (10.2) |
| Test gauge, 0 to 1,000 kPa, with fittings | Steam and air pressure checks |
| Solvent sample jar, 250 mL, glass | Daily colour check and monthly tests |
| Torque screwdriver, 0.5 to 5 Nm | Electrical terminations (10.4) |
| Padlocks and danger tags, 4 sets | Lockout (2.6) |

### 12.3 Ordering

Quote the part number, the description, the serial number and the machine
location. Filter cartridges are ordered in sets of four; ordering fewer produces
uneven flow and short cartridge life. Gaskets, seals and switches are ordered as
genuine parts only — a non-genuine filter cartridge, gasket, relief valve or
pressure switch voids the warranty position at 13.5 and, in the case of the
relief valve, invalidates the pressure vessel record.

### 12.4 Replacement intervals

Filter cartridges 250 running hours or 180 kPa differential, and annually
regardless; adsorber carbon 12 months; polisher carbon 6 months or immediately on
haze; loading door and still access door gaskets 12 months; button trap and lint
trap gaskets 6 months; filter housing gaskets every second cartridge change; pump
mechanical seals 12 months; drive belt 24 months; drying battery steam trap
capsule 24 months; line strainer screens 12 months; respirator cartridges 30 days
in use. The same intervals are set out against the maintenance schedule at 10.6.

---

## 13. Warranty and service

### 13.1 Warranty period

The XL-800 carries a manufacturer's warranty of 24 months from commissioning, or
3,000 cycles, whichever occurs first, on parts and labour for defects in material
and workmanship. Pressure-retaining components of the still carry 60 months
against defect. Warranty on this machine expired in March 2021; this section is
retained for reference and because the same terms apply to replacement parts,
which carry the balance of the original warranty or 6 months, whichever is
longer.

### 13.2 Covered

Failure of a component through defective material or manufacture; failure of a
weld, seal or gasket before its rated service interval; and controller or
software faults not caused by user parameter changes.

### 13.3 Excluded

- Consumable items in Section 12, and any item consumed at its normal interval.
- Damage caused by solvent that is off specification, contaminated, or of a type
  other than perchloroethylene.
- Damage caused by water, steam or air supplies outside the limits in Section 3,
  by supply voltage outside ±6%, by incorrect phase rotation, or by the absence
  of the specified earth leakage protection.
- Corrosion attributable to low acid acceptance solvent (9.9).
- Fouling or scaling from cooling water outside the hardness limit.
- Damage from overloading, from loading wet goods, or from foreign objects left
  in pockets.
- Fair wear and tear, and cosmetic damage.
- Consequential loss, including loss of trade, garment damage or customer claims.

### 13.4 Service intervals

| Service | Interval | By |
|---|---|---|
| Operator maintenance | Daily, weekly, monthly per Section 10 | Site |
| Scheduled technical service | Quarterly | Authorised service agent |
| Major service | Annually, with the quarterly then due | Authorised service agent |
| Pressure vessel external inspection | Annually, AS 3788 | Competent person |
| Refrigerant leak check and log | Quarterly | ARC licensed technician |

A service report must be obtained for every attendance and filed with the machine
records (9.10). A gap in the record will be treated as a lapse in maintenance.

### 13.5 What voids the warranty

- Defeating, bypassing or modifying any interlock or guard.
- Operation with a fault code locked out after three resets (11.1).
- Alteration of a service-level parameter (6.4) by any person other than an
  authorised technician.
- Fitting of a non-genuine filter cartridge, gasket, relief valve or pressure
  switch.
- Repair, modification or refrigerant work by an unauthorised person.
- Relocation without re-commissioning to Section 4.
- Operation outside the ambient limits at 3.11.

---

## 14. Appendices

### Appendix A — Commissioning record sheet

Machine: Union XL-800 · Serial: UXL8-2019-0447 · Commissioned: 14/03/2019
Site: Main Street Dry Cleaners, Shop 4, 118 Hargreaves Street, Bendigo VIC 3550

| Item | Value recorded | Signed |
|---|---|---|
| Supply voltage L1-L2 / L2-L3 / L3-L1 | ....... / ....... / ....... V | ....... |
| Phase rotation correct | Yes / No | ....... |
| Earth continuity, machine frame | ....... Ω | ....... |
| Insulation resistance at 500 V DC | ....... MΩ | ....... |
| Full load current measured | ....... A | ....... |
| Steam pressure, static / running | ....... / ....... kPa | ....... |
| Compressed air pressure, regulated | ....... kPa | ....... |
| Cooling water flow / supply temperature | ....... L/h / ....... °C | ....... |
| Refrigerant charge verified | ....... kg R404A | ....... |
| Solvent charged, Tank 1 / 2 / 3 | ....... / ....... / ....... L | ....... |
| Distillation rate measured | ....... L/h | ....... |
| Door interlock proven | Pass / Fail | ....... |
| Button trap interlock proven | Pass / Fail | ....... |
| Emergency stop, panel / still end | Pass / Fail | ....... |
| Bund integrity test | Pass / Fail | ....... |
| Supervisor access code set to | ....... | ....... |
| Parameter set matches 6.3 defaults | Yes / No | ....... |
| Operator training delivered to | ....... | ....... |

Commissioning technician: .......................... Licence: ..................
Occupier's representative: ......................... Date: ....../....../......

### Appendix B — Weekly log sheet

Week commencing ....../....../......

| Check | Mon | Tue | Wed | Thu | Fri | Sat |
|---|---|---|---|---|---|---|
| Steam pressure at machine, kPa | | | | | | |
| Air pressure at machine, kPa | | | | | | |
| Tank 1 / Tank 2 / Tank 3 level, L | | | | | | |
| Filter differential, kPa | | | | | | |
| Button trap emptied | | | | | | |
| Lint trap cleaned | | | | | | |
| Separator checked / decanted | | | | | | |
| Still batches run | | | | | | |
| Cycles run | | | | | | |
| Fault codes logged | | | | | | |
| Leaks observed | | | | | | |
| Operator initials | | | | | | |

Weekly tasks (10.2): drum clean □ interlocks tested □ E-stops tested □ carbon
desorb □ steam traps checked □ separator pH □ machine and bund cleaned □

Signed: .......................... Date: ....../....../......

### Appendix C — Solvent purchase and distillation log

| Date | Supplier / drum no. | Litres in | Cost $ | Tank | Litres charged | Initials |
|---|---|---|---|---|---|---|
| ..../..../.... | | | | | | |
| ..../..../.... | | | | | | |
| ..../..../.... | | | | | | |

| Date | Batches | Litres distilled | Still hrs | Muck drum | Residue kg | Waste record no. |
|---|---|---|---|---|---|---|
| ..../..../.... | | | | | | |
| ..../..../.... | | | | | | |
| ..../..../.... | | | | | | |

Monthly mileage: garment mass ......... kg ÷ solvent purchased ......... L
= ......... kg/L. Target 400 to 500 kg/L (9.3).

Solvent tests: acid acceptance ......... % · water ......... ppm ·
NVR Tank 2 ......... % · date ....../....../......

### Appendix D — Monthly solvent and residue summary

Month ................................ Year ..........

| Item | Value |
|---|---|
| Garments cleaned | .......... |
| Estimated garment mass | .......... kg |
| Solvent purchased | .......... L |
| Solvent charged to machine | .......... L |
| Distillation batches run | .......... |
| Litres distilled | .......... L |
| Still hours | .......... h |
| Residue drums consigned | .......... |
| Residue weight | .......... kg |
| Waste tracking record numbers | .......... |
| Filter changes | .......... |
| Carbon desorbs | .......... |
| Mileage achieved | .......... kg/L |
| Acid acceptance | .......... % |
| Water content | .......... ppm |
| Faults logged this month | .......... |
| Technician attendances | .......... |

Prepared by: .......................... Date: ....../....../......

### Appendix E — Decommissioning notes

Decommissioning is not an operator task.

1. Run the still until Tank 2 and Tank 3 are drawn down as far as the pumps will
   take them. Muck cook and remove residue per 9.6.
2. Pump the remaining charge from all three tanks and the base tank into labelled
   UN-approved 200 L drums and record the quantity recovered.
3. Recovered solvent is either returned to Solvex Chemicals Australia under the
   supply agreement or consigned as prescribed industrial waste through Sovereign
   Environmental Services. There is no other lawful route.
4. Remove and drum the filter cartridges and the adsorber carbon as prescribed
   industrial waste.
5. Have the refrigerant recovered by an ARC licensed technician and record the
   mass recovered and its destination. Venting R404A is an offence.
6. Isolate and disconnect the electrical supply and make it safe at the isolator.
7. Isolate, drain and disconnect steam, condensate, compressed air and cooling
   water, and cap all open ends.
8. Flush the drum, tanks, still and pipework with clean solvent, recover the
   flushings, then ventilate the machine with the doors open for at least
   48 hours before it is moved.
9. Test the atmosphere inside the drum and the still before any cutting, welding
   or hot work. Perchloroethylene in the presence of a flame produces phosgene.
10. Retain the machine records, waste tracking records, service history and this
    manual for at least five years after disposal.
11. If the machine is relocated rather than scrapped, re-commission in full to
    Section 4 and complete a new Appendix A. See 13.5 for the warranty position.

---

*End of manual. Union XL-800, Rev 4, January 2024. Serial UXL8-2019-0447.*
