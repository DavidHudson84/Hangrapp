# Pilot K25 Rotary Screw Air Compressor

## Operation and Maintenance Manual

**Model:** Pilot K25
**Package type:** Receiver-mounted rotary screw compressor with integrated refrigerated air dryer
**Nominal motor rating:** 18.5 kW
**Receiver:** 500 L horizontal, package mounted
**Serial number:** PK25-19-0883
**Year of manufacture:** 2019
**Manual reference:** PK25-OM-EN
**Revision:** Rev 3, issued 2021
**Supersedes:** Rev 2 (2020), Rev 1 (2018)

---

## 1. Front matter

### 1.1 Identification of the machine

Every Pilot K25 carries a stainless steel data plate riveted to the right-hand
side of the canopy frame, immediately below the electrical enclosure. The data
plate records the model, the serial number, the year of manufacture, the maximum
working pressure, the motor rating, the supply voltage and frequency, and the
package mass. The serial number is also stamped into the receiver saddle at the
drive end and etched onto the airend housing.

The serial number for the machine covered by this copy of the manual is
**PK25-19-0883**. Quote it in full in every parts order, every warranty claim and
every service call. The first four characters identify the model, the next two
the year of manufacture, and the final four the build sequence.

The receiver fitted to this package carries its own separate identification. It
is a registered pressure vessel and has a vessel plate on the front head, at the
non-drive end, giving the design code, the design pressure, the design
temperature, the manufacturer's serial number and the volume. The receiver plate
must never be painted over, ground off, covered by lagging or obscured by
labelling. A pressure vessel whose identification cannot be read cannot be
inspected, and a vessel that cannot be inspected cannot lawfully be kept in
service.

### 1.2 How to use this manual

This manual is written for three different readers and it is important to know
which parts belong to which.

**The operator** is the person who switches the compressor on at the start of the
day, watches the display, drains the receiver, records the readings on the weekly
log and switches it off. The operator needs Section 2 (Safety), Section 7
(Controls and display), Section 8 (Operation), the daily and weekly rows of the
maintenance schedule in Section 9, and the operator-check column of the fault
code table in Section 10. An operator should read those sections in full before
touching the machine and should not work outside them.

**The maintainer** is the person who carries out the routine service intervals —
oil, filters, separator, belts, dryer cleaning, drain testing. The maintainer
needs everything the operator needs plus Sections 5, 6, 9 and 11. Some tasks in
Section 9 are marked as requiring a licensed electrician or a refrigerant
handling licence. Those tasks are not open to a general maintainer regardless of
experience.

**The technician** is a person trained on Pilot screw compressors and competent
in three-phase electrical work. Everything in this manual is open to the
technician. Tasks that require the technician are flagged throughout, and the
fault code table in Section 10 has a dedicated column that says yes or no.

Read Section 2 before you read anything else. Read Section 6 before you make any
decision about air quality, filtration or dryer settings, because on this site
the consequences of getting air quality wrong fall on finished garments and not
on the machine.

Sections are numbered and cross-referenced. Where a fault code is mentioned in
prose it is written in the same form as in the table — for example A14 — and it
means the same thing everywhere in this manual. Where a part number is mentioned
it matches Section 11 exactly.

### 1.3 Recording changes to this manual

This manual is Rev 3. Revisions are issued as complete replacements, not as
insert pages. If you hold a copy with a different revision number on the cover,
destroy it. Do not maintain the machine from two revisions at once.

Changes made at Rev 3 (2021):

- Section 6 rewritten and expanded to cover ISO 8573-1 air quality classes,
  three-stage filtration and garment marking investigation.
- Fault codes A28 to A34 added, covering the electronic condensate drains and the
  dryer dew point sensor.
- Separator element change interval revised from 4,000 h to 2,000 h where the
  machine runs above 70% duty or in an ambient above 32 °C.
- Oil analysis requirement added to the warranty terms in Section 12.
- Appendix D (air quality test record) added.

### 1.4 Symbols used in this manual

The following symbols appear in the margin and in the text. They are the same
symbols used on the labels applied to the machine.

**DANGER** — An instruction that, if ignored, will cause death or serious injury.
There is no discretion attached to a DANGER. It is not advice.

**WARNING** — An instruction that, if ignored, may cause death or serious injury.

**CAUTION** — An instruction that, if ignored, may cause minor injury or may
damage the machine.

**NOTICE** — Information about correct operation that has no direct safety
consequence but which affects reliability, running cost or air quality.

**ELECTRICAL** — The task is inside the electrical enclosure or on the supply and
must be carried out by a licensed electrician.

**PRESSURE** — The component is or may be under pressure. It must be isolated and
proved depressurised before work.

**HOT** — The surface reaches a temperature capable of causing a burn during
normal running and remains hot for a considerable period after shutdown.

**REFRIGERANT** — The circuit contains fluorocarbon refrigerant. Work on the
circuit requires a refrigerant handling licence.

**LOCKOUT** — The task requires the machine to be isolated, locked out and tagged
before it is begun.

Labels applied to the machine are part of the machine's safety system. If a label
becomes illegible, painted over or detached, replace it before the machine is put
back into service. Replacement label sets are listed in Section 11.

---

## 2. Safety

### 2.1 General

A rotary screw compressor is a machine that stores a large quantity of energy in
a small space, drives it with a motor that will restart without warning, and
surrounds it with surfaces hot enough to burn. None of that is obvious to look
at. The package is quiet, enclosed and undramatic, and it is precisely because it
does not look dangerous that people are injured by it.

Nobody may operate, service or approach the inside of this machine who has not
read this section. That includes contractors attending for a different purpose —
an electrician working on an adjacent board, a refrigeration technician on the
dryer, a plumber on the reticulation.

The machine must not be modified. Do not fit a different pressure switch, do not
alter the safety valve setting, do not remove a guard and run the machine, do not
bypass the door interlock, do not fit a non-standard separator element, do not
raise the maximum pressure parameter above the value set at the factory. Any of
these voids the warranty (Section 12) and several of them will kill somebody.

### 2.2 Stored energy in the receiver

**DANGER.** The 500 L receiver and the pipework downstream of it store
compressed air at up to 10 bar. Five hundred litres of air at 8 bar carries
roughly the same energy as a substantial quantity of high explosive. A fitting
released under pressure becomes a projectile. A hose that whips can break bones
and take out an eye. A vessel that fails from internal corrosion does not leak
first — it opens.

The stored energy does not go away when the compressor stops. Stopping the
machine at the display, at the isolator, or by pulling the fuses does nothing at
all to the pressure already in the receiver. The receiver stays at pressure for
days.

Before any work on the air system:

1. Stop the compressor at the control panel and wait for the run-down cycle to
   finish. The airend and separator vessel blow down through the internal blowdown
   valve during run-down. Do not interrupt this.
2. Isolate the electrical supply at the local isolator and lock it out
   (Section 2.9).
3. Close the outlet ball valve to isolate the package from the reticulation.
4. Open the manual drain valve at the bottom of the receiver and leave it open.
5. Watch the receiver pressure gauge fall to zero and stay at zero. A gauge that
   reads zero because it has failed is common. Confirm zero at the gauge and
   confirm free air is no longer coming out of the open drain.
6. Only then break a joint.

**WARNING.** Never crack a fitting to "let the pressure off". Never loosen a bolt
on a pressurised joint to see whether it is pressurised. Never assume the system
is dead because someone else told you it was. Prove it yourself, every time, on
the vessel you are about to open.

### 2.3 Hot surfaces

**WARNING.** During normal running the following reach temperatures that will
cause immediate full-thickness burns on contact:

- The airend discharge casting and the discharge pipe to the separator vessel:
  up to 105 °C.
- The oil cooler and the aftercooler cores and headers: up to 95 °C.
- The separator vessel body: up to 95 °C.
- The motor frame: up to 80 °C.
- The dryer compressor discharge line and the condenser: up to 90 °C.
- The oil in the sump: up to 105 °C, and the oil is under pressure.

These surfaces remain dangerous for a long time after shutdown. The separator
vessel and sump take over an hour to fall below 50 °C in a hot plant room. Do not
judge temperature by putting a hand near a surface — the canopy insulation
prevents any useful radiant warning.

Allow a minimum of **thirty minutes** after shutdown before opening the canopy,
and a minimum of **sixty minutes** before breaking into the oil circuit. Wear
gloves rated for contact heat when working on a machine that has run within the
previous two hours.

**DANGER.** Never remove the oil filler plug on a hot, pressurised machine. The
sump is a pressure vessel and the oil in it is above 100 °C. Removing the plug
under pressure sprays hot oil over the person doing it. Depressurise per
Section 2.2 first, always, without exception, no matter how quickly the oil is
needed.

### 2.4 Rotating parts

**DANGER.** The drive belts, the pulleys, the motor fan and the cooling fan are
capable of amputating fingers and dragging in loose clothing, gloves, hair,
lanyards and jewellery. All of them are behind guards. All of the guards must be
in place before the machine is started.

The canopy has a door interlock on the belt guard access panel. Removing that
panel opens the interlock and prevents starting. Do not defeat the interlock. If
belt tension must be checked with the machine energised — and it should not be —
the task belongs to a technician using proper stroboscopic or frequency-meter
methods from outside the guard, not with the guard off.

The cooling fan continues to run after the compressor unloads and, in some
control configurations, continues to run for a period after the motor stops. A
stationary fan is not proof of a stopped fan.

### 2.5 Automatic restart after power failure

**DANGER.** This is the single most under-appreciated hazard on the machine.

The Pilot K25 is fitted with automatic restart, which is enabled by default
(parameter P26, Section 7.4). When automatic restart is enabled and the supply is
interrupted and then restored, the compressor will start again on its own, with
no warning, no prompt and nobody's hand on the panel. It will do this whether or
not somebody has their hands inside the canopy.

Turning the machine off at the control panel does not make it safe. Pressing the
emergency stop does not make it safe against a subsequent reset by a third party.
The only safe state is isolated, locked and tagged.

The machine also starts automatically whenever receiver pressure falls to the
load setpoint while the controller is in AUTO. Nobody has to press anything. The
first indication of a start is the airend already turning.

A yellow label reading "THIS MACHINE STARTS WITHOUT WARNING" is fitted to the
canopy door and to the electrical enclosure. If either label is missing, replace
it before the machine goes back into service.

### 2.6 Electrical

**DANGER.** The electrical enclosure contains 400 V three-phase at up to 34 A
full load. The supply side of the isolator remains live when the isolator is
open. The star-delta contactors, the motor terminal box and the dryer supply are
all live during running.

Work inside the electrical enclosure is restricted to a licensed electrician.
This is not an internal Pilot rule; it is the law in Victoria and there is no
version of "just having a quick look" that complies with it.

- Do not open the electrical enclosure with the supply energised.
- Do not operate the machine with the enclosure door open or its seals damaged.
- Do not wash down the plant room floor in a way that directs water at the
  package. The enclosure is IP54; a hose is not an IP54 test.
- Confirm the earth connection at every service. The package earth stud is on the
  frame beside the gland plate and is marked.
- The machine must be supplied through an upstream protective device sized per
  Section 4.7 and must not share a circuit with another motor load.

### 2.7 Noise

The package produces **68 dB(A)** at one metre, free field, running loaded, with
the canopy closed and undamaged. That is acceptable for unrestricted occupancy.

With the canopy open, or with acoustic lining missing or oil-soaked, levels
exceed 90 dB(A) at the operator position. Hearing protection is mandatory
whenever the machine is running with any panel removed, and running the machine
with panels removed should be limited to the minimum diagnostic time required.

Do not remove acoustic lining permanently to "help it run cooler". The lining is
part of the cooling air path as well as the acoustic treatment, and removing it
raises discharge temperature, which shortens oil and separator life and
eventually trips A01.

### 2.8 Never breathe the air

**DANGER.** Air from this compressor is not breathing air and must never be used
for breathing air, for any breathing apparatus, for any air-fed mask or hood, for
any respirator, or for any medical purpose.

The air leaving this machine contains oil aerosol and oil vapour carried over
from the compression process, and may contain carbon monoxide and other products
of oil degradation if the machine has run hot. Downstream filtration, including
activated carbon, reduces oil content for process purposes. It does not make the
air breathable and it is not monitored to the standard that breathing air
requires.

Do not use compressed air to clean skin or clothing. Air at 7 bar can penetrate
skin and cause an air embolism, which is fatal. Do not point an air gun at a
person for any reason. Blow guns used in the plant must be of a regulated,
restricted-outlet type limited to 200 kPa at the nozzle in accordance with the
plant's own air gun policy.

Do not use compressed air to blow down the floor or the machines. It puts solvent
residue, lint and fibre into the air of the plant room and onto garments hanging
in the finishing area.

### 2.9 Depressurising and lockout/tagout

Before any maintenance task in this manual that is marked LOCKOUT, carry out the
following in order and record it.

1. Notify the plant. Air is reticulated to the presses, the finishers, the dry
   cleaning machine pneumatics and the garment conveyor. Removing air stops all
   of them, and stopping the conveyor mid-cycle with garments in transit creates
   its own problems. Agree the outage before you take the air away.
2. Select OFF at the controller and allow the run-down cycle to complete.
3. Open the package isolator.
4. Apply a personal lock and a tag to the isolator. One lock per person working.
   A hasp where more than one person is working. The tag carries the name, the
   date, the time and a contact number.
5. Close the package outlet ball valve.
6. Open the receiver manual drain and the manual vent on the separator vessel.
7. Verify zero pressure at the receiver gauge, at the separator vessel gauge and
   at the dryer inlet gauge. Verify no air is discharging from the open drain.
8. Where the task is on the reticulation rather than the package, also close and
   lock the relevant branch isolation valve and vent the branch, and confirm at
   the point of work.
9. Do the work.
10. On completion, refit all guards and panels, close all drains and vents,
    confirm nobody is inside the machine, remove tags and locks in reverse order,
    close the isolator and restart per Section 8.

Locks are removed by the person who fitted them. No exceptions, no bolt cutters,
no supervisor override.

### 2.10 The receiver is a pressure vessel

The 500 L receiver on this package is a pressure vessel within the meaning of
AS/NZS 1200 and is classified and registered accordingly. This carries specific
legal duties on the occupier of the plant, and they are ongoing duties, not a
one-off at installation.

What that means in practice:

- The vessel has a design registration and a plant registration. The plant
  registration for this vessel is **VIC-PV-118-4602**. Keep the registration
  document with the plant records.
- The vessel must be inspected periodically by a competent person in accordance
  with AS/NZS 3788. For a Hazard Level C air receiver in this service the
  external inspection interval is annual and the internal inspection interval is
  four years, with the internal inspection normally carried out by internal
  examination through the inspection opening after the vessel has been isolated,
  drained and ventilated.
- The safety valve is part of the registered vessel, not an accessory. It is set
  and sealed at **10.5 bar** and must be replaced or re-certified at the interval
  in Section 9. A safety valve with a broken seal, a painted body or a wired-down
  lever is a defect and the vessel must be taken out of service.
- Corrosion from condensate is the principal failure mode. Water sits in the
  bottom of a horizontal receiver, and a receiver that is not drained corrodes
  from the inside where nobody can see it. Draining the receiver is not
  housekeeping. It is pressure vessel integrity, and it is why the daily drain
  check is a daily task and not a weekly one.
- No welding, drilling, tapping, grinding or attachment of any kind may be made
  to the vessel shell or heads. Do not weld a bracket to it. Do not drill it for
  an extra tapping. Any such alteration ends the vessel's registration
  immediately.
- If the vessel is struck, dented, subjected to fire, or found to be leaking from
  the shell, a weld or a head, take it out of service and call the competent
  person. Do not put it back into service on the basis that it "seems to hold
  pressure".

The competent person engaged for this site is **Goldfields Plant Inspection
Services Pty Ltd**, who also carry out the AS 3788 inspection on the plant's
steam boiler. Arranging the receiver inspection at the same visit as the boiler
inspection is sensible and is what is done in practice.

---

## 3. Specification

All figures are for the standard air-cooled package at the reference condition of
20 °C ambient, 1,013 mbar, 60% relative humidity, unless another condition is
stated. Free air delivery is measured in accordance with ISO 1217 Annex C and is
subject to the tolerances of that standard.

### 3.1 Compressor package

| Item | Value |
|---|---|
| Model | Pilot K25 |
| Configuration | Single-stage oil-flooded rotary screw, belt driven |
| Motor nominal rating | 18.5 kW |
| Motor rated speed | 2,950 rpm |
| Airend speed | 3,540 rpm |
| Free air delivery at 7 bar(g) | 3.05 m³/min (183 m³/h) |
| Free air delivery at 8 bar(g) | 2.88 m³/min (173 m³/h) |
| Free air delivery at 10 bar(g) | 2.42 m³/min (145 m³/h) |
| Specific power at 7 bar(g) | 6.07 kW per m³/min |
| Nominal working pressure (as set on this machine) | 7.0 bar(g) load / 8.0 bar(g) unload |
| Maximum working pressure | 10.0 bar(g) |
| Receiver design pressure | 11.0 bar(g) |
| Safety valve set pressure | 10.5 bar(g) |
| Minimum pressure valve opening | 4.5 bar(g) |
| Package absorbed power, full load, including fan | 19.6 kW |
| Package absorbed power including dryer | 20.4 kW |
| Absorbed power, unloaded | 6.2 kW |
| Absorbed power, standby (controller and drains only) | 0.04 kW |

### 3.2 Air receiver

| Item | Value |
|---|---|
| Volume | 500 L |
| Orientation | Horizontal, package mounted, four saddle feet |
| Design code | AS 1210 |
| Hazard level | C |
| Design pressure | 11.0 bar(g) |
| Design temperature | 100 °C |
| Corrosion allowance | 1.0 mm |
| Victorian plant registration | VIC-PV-118-4602 |
| Inspection opening | 100 mm × 150 mm elliptical, non-drive end head |
| External inspection interval | 12 months |
| Internal inspection interval | 48 months |
| Manual drain | 1/2" BSP ball valve, bottom centre |
| Automatic drain | Electronic zero-loss, part PK-ZD-12 |

### 3.3 Refrigerated air dryer

| Item | Value |
|---|---|
| Type | Integrated cycling refrigerated dryer with hot gas bypass |
| Rated capacity | 3.6 m³/min at inlet 35 °C, ambient 25 °C, 7 bar(g) |
| Rated pressure dew point | +3 °C |
| Achievable pressure dew point range | +3 °C to +10 °C depending on load and ambient |
| Maximum inlet temperature | 55 °C |
| Maximum ambient for rated performance | 40 °C |
| Refrigerant | R134a |
| Refrigerant charge | 0.62 kg |
| Refrigerant GWP / CO₂-e charge | 1,430 / 0.89 t CO₂-e |
| Dryer compressor absorbed power | 0.75 kW |
| Pressure drop across dryer at rated flow | 0.14 bar |
| Condensate drain | Electronic zero-loss, part PK-ZD-12 |

**NOTICE.** The refrigerant charge is below the threshold at which a leak
detection regime becomes mandatory, but work on the circuit still requires an
appropriately licensed refrigeration technician under the Ozone Protection and
Synthetic Greenhouse Gas Management Regulations. Nobody else may open the
circuit, recover refrigerant, or top it up.

### 3.4 Electrical

| Item | Value |
|---|---|
| Supply | 400 V, 3 phase, 50 Hz, 3 phase + neutral + earth |
| Supply voltage tolerance | ±6% |
| Full load current | 34 A |
| Starting method | Star-delta, transition at 6 s |
| Starting current | 82 A peak, star |
| Recommended upstream protection | 50 A gG fuse or 40 A type C circuit breaker |
| Recommended supply cable | 4 core 10 mm² Cu plus earth, adjust for run length |
| Motor insulation class / protection | F / IP55 |
| Motor efficiency class | IE3 |
| Motor thermistors | 3 × PTC embedded, wired to controller input |
| Control voltage | 24 V AC from package transformer |
| Enclosure rating | IP54 |
| Phase sequence detection | Fitted, trips A11 on reversal |

### 3.5 Lubrication

| Item | Value |
|---|---|
| Oil grade | Semi-synthetic rotary screw compressor fluid, ISO VG 46 |
| Approved oil | Pilot SS-8000, part PK-OIL-8000-20 (20 L pail) |
| Total system capacity | 18 L |
| Refill quantity at oil change | 16 L |
| Sump working level | Between MIN and MAX on the sight glass, machine unloaded and hot |
| Oil change interval, standard | 4,000 h or 12 months, whichever comes first |
| Oil change interval, high duty or ambient above 32 °C | 2,000 h or 12 months |
| Oil operating temperature, normal | 78 °C to 95 °C |
| Thermostatic valve opening temperature | 71 °C |
| High temperature warning (A02) | 105 °C |
| High temperature shutdown (A01) | 110 °C |

**CAUTION.** Do not mix oil grades. Do not top up semi-synthetic with mineral
oil or with polyglycol. Mixing causes the oil to lose its ability to separate
from air, which raises carryover, which puts oil into the air line, which stains
garments at the press. If the oil in the machine is not known with certainty,
drain, flush and refill.

### 3.6 Environment, dimensions and connections

| Item | Value |
|---|---|
| Minimum ambient temperature | +2 °C |
| Maximum ambient temperature | +45 °C (dryer derates above 40 °C) |
| Maximum relative humidity | 90% non-condensing |
| Maximum altitude without derate | 1,000 m |
| Cooling air flow through package | 6,000 m³/h |
| Heat rejected to plant room, compressor | 19.4 kW |
| Heat rejected to plant room, dryer | 2.6 kW |
| Total heat rejected to plant room | 22.0 kW |
| Sound pressure level, 1 m, free field, canopy closed | 68 dB(A) |
| Length | 1,860 mm |
| Width | 780 mm |
| Height | 1,720 mm |
| Mass, dry | 640 kg |
| Mass, with oil charge | 658 kg |
| Air outlet connection | R 1" BSP female, on dryer outlet |
| Condensate drain connections | 1/4" BSP male, two off |
| Minimum service clearance | See Section 4.3 |

**NOTICE.** Heat rejection is the figure most often ignored at installation and
it is the one that causes the most trouble later. Twenty-two kilowatts is a
substantial heat load in an enclosed plant room. If it is not removed, the room
temperature climbs, the compressor runs hotter, the oil degrades faster, the
dryer loses dew point and water goes down the line to the presses. Section 4.2
sets out the calculation.

---

## 4. Installation and services

This section describes what a correct installation looks like. It is included
partly for reference at the time of installation and partly so that a problem
found years later can be traced back to an installation shortcut.

### 4.1 Plant room requirements

The machine is designed for indoor installation in a dedicated or shared plant
room. It must not be installed outdoors, in a wash bay, in a solvent store, or in
any location where it can draw in solvent vapour, lint, fibre or steam.

Requirements:

- **Clean intake air.** The compressor draws its air from the room. Whatever is
  in the room goes through the airend, into the oil, into the receiver and down
  the line towards the garments. In a dry cleaning plant the specific risks are
  perchloroethylene and hydrocarbon vapour, lint and fibre from the dryers and
  the finishing area, and steam from the boiler and the presses.
- **Vapour separation.** The compressor intake must not be within 5 m of the dry
  cleaning machine door, the solvent store, the still, or the button trap. Halogenated
  solvent drawn into a compressor forms acids in the oil in the presence of water
  and heat, which attacks bearings and seals and destroys the separator element.
  If the plant room and the machine room are the same space, ducted intake air
  from outside is required (Section 4.2).
- **Dry floor.** Level, load-bearing, and not a floor that is regularly hosed.
- **Lint control.** The room must not be where lint accumulates. Lint blinds the
  aftercooler and the dryer condenser, and a blinded cooler is the most common
  cause of A01 and A31 in a laundry environment.
- **Light and access.** Adequate permanent lighting and a clear path to the
  isolator that does not require moving anything.
- **Temperature.** Room temperature must stay within 2 °C to 45 °C at the
  compressor intake. In a Bendigo summer with a boiler in the same building, an
  unventilated plant room reaches 45 °C easily.

### 4.2 Ventilation and heat rejection

The package rejects **22.0 kW** of heat into the room. That heat must be removed
by ventilation air, or the room temperature rises until the compressor trips.

The ventilation air volume required is:

**V = 2,985 × Q ÷ ΔT**

where V is the ventilation air flow in m³/h, Q is the heat rejected in kW, and ΔT
is the permitted temperature rise of the room air above outside ambient, in
kelvin.

For this machine, taking a permitted rise of 10 K:

V = 2,985 × 22.0 ÷ 10 = **6,567 m³/h**, call it **6,600 m³/h**.

If other heat sources share the room — a boiler, dryers, a still — their heat
rejection must be added to Q before the calculation is done. Do not size the
ventilation on the compressor alone if the compressor does not have the room to
itself.

Arrangements, in order of preference:

1. **Ducted extract from the package outlet.** A transition duct from the
   cooling air discharge at the rear of the canopy to outside. Total duct
   resistance must not exceed 15 Pa, or an in-line booster fan is required and
   must be interlocked to run whenever the compressor runs. Ducting the discharge
   is the most effective arrangement because it removes the heat before it enters
   the room.
2. **Thermostatically controlled extract fan** at high level on the wall
   opposite the intake louvre, sized at 6,600 m³/h, with a free intake louvre at
   low level of at least 0.55 m² free area.
3. **Natural ventilation** with high-level and low-level louvres. Rarely
   adequate for 22 kW and not recommended.

**NOTICE.** In winter the discharge air can be usefully diverted back into the
plant to offset heating, using a manually changed-over damper. If this is done,
the changeover must be checked at the start of every summer. A discharge damper
left in the winter position through a Bendigo February will trip the machine on
A01 within an hour of the day warming up.

### 4.3 Clearances

Minimum clearances, measured from the canopy panels:

| Face | Minimum clearance | Reason |
|---|---|---|
| Cooling air intake (front) | 1,000 mm | Intake air path, filter access |
| Cooling air discharge (rear) | 1,000 mm | Discharge path, no recirculation |
| Right-hand side (electrical) | 800 mm | Enclosure door swing, electrical access |
| Left-hand side (service) | 800 mm | Separator, filters, oil fill |
| Above | 1,000 mm | Lifting, canopy panel removal |

Discharge air must not be able to short-circuit back to the intake. Do not
install the machine with its discharge facing a wall closer than 1,000 mm, and do
not install it with its intake facing the discharge of another compressor or a
dryer.

### 4.4 Foundation

A level concrete floor of at least 100 mm thickness is sufficient. The package
mass with oil is 658 kg on four mounting feet, giving a point load of about
165 kg per foot. Anti-vibration mounts are fitted at the factory. The machine
does not require holding-down bolts and must not be rigidly bolted to the floor,
because rigid mounting transmits airend vibration into the building structure.

Level the machine within 3 mm across its length using shims under the AV mounts.
An out-of-level machine gives a false reading at the oil sight glass, which leads
to over- or under-filling, which leads to carryover.

### 4.5 Pipework

The plant is reticulated in a ring main serving the presses, the finishers, the
dry cleaning machines' pneumatics and the garment conveyor.

**Material.** Use galvanised steel, stainless steel, copper, or a proprietary
aluminium compressed air pipe system. **Do not use ordinary black steel** — it
rusts internally and sends rust particles to the presses. **Do not use PVC
pressure pipe for compressed air under any circumstances.** PVC embrittles with
oil and age and fails by shattering.

**Sizing.** The main must be sized for a pressure drop no greater than 0.1 bar
from the receiver to the furthest point of use at full flow. For 3.05 m³/min at
7 bar over a ring main of up to 60 m equivalent length, the minimum bore is
32 mm. **40 mm is specified for this installation** to allow for future load and
to keep velocity below 6 m/s.

Branch drops to individual machines: 20 mm to the presses and finishers, 15 mm
to the dry cleaning machine pneumatics and to the conveyor. Do not run a press
off a 10 mm branch — the press will starve on the head-down stroke and the
operator will compensate by raising the compressor setpoint, which costs energy
on every machine in the plant.

**Ring main.** A ring is strongly preferred over a spur. It halves the effective
length to any point of use and it allows one leg to be isolated for work without
taking the whole plant off air.

**Slope and drop legs.** The main must fall at **1 in 100** in the direction of
air flow. Every branch must be taken from the **top** of the main, never the
bottom or the side, so that condensate in the main cannot run into the branch. At
the low point of each run, and at the end of each leg, fit a drop leg extending
at least 300 mm below the branch tee, terminated in a drain. This is not
optional. Water collected in a badly piped main arrives at a press as a slug and
puts a water mark on a garment.

### 4.6 Condensate drainage and disposal

The package produces condensate at three points: the receiver, the dryer, and
each line filter bowl. In a Bendigo summer at 60% relative humidity the machine
produces in the order of **18 to 25 litres of condensate a day** at typical duty.

That condensate is not clean water. It contains oil carried over from the
compression process, at concentrations typically between 100 and 1,000 mg/L.

**It must not be discharged to the stormwater system. It must not be discharged
to the trade waste sewer without treatment or without the written agreement of
the water authority.** Discharging oily condensate to stormwater is an offence
under the Environment Protection Act 2017 (Vic) and is exactly the kind of thing
that is discovered years later when somebody follows a pipe.

The correct arrangement, and the one to be maintained on this site:

1. All drains piped to a common condensate collection line, run with a
   continuous fall and no upward legs, to
2. An oil/water separator unit of the coalescing or adsorption type, sized for
   the compressor's condensate rate, discharging
3. Treated water to the trade waste connection under the site's trade waste
   agreement, with
4. The separated oil collected in a sealed container and removed by the licensed
   waste contractor with the plant's other prescribed industrial waste.

Drain lines must not be manifolded together in a way that allows one drain to
pressurise another. Each electronic drain must have its own line to the
collection point, or a manifold designed for the purpose.

The oil/water separator's filter cartridge is a consumable with a finite
capacity. Record the change date. A separator run past its capacity passes oil
straight through and gives a false sense of compliance.

### 4.7 Electrical installation

Electrical installation is the work of a licensed electrician and must comply
with AS/NZS 3000.

- The supply must terminate at a **lockable isolator within sight of the
  machine** and within 3 m of it.
- Supply: 400 V 3 phase 50 Hz. Full load current 34 A. Protect at 50 A gG or
  40 A type C. Minimum cable 4 core 10 mm² Cu plus earth for runs to 30 m;
  recalculate for longer runs to hold volt drop below 2%.
- The machine is star-delta started. Confirm the transition timer is set to 6 s.
- **Confirm phase rotation before first start.** The airend is direction
  sensitive and running it backwards for even a few seconds can destroy it. The
  controller's phase monitor trips A11 on reversal, but do not rely on it as the
  only check.
- Earth the package at the marked earth stud. Confirm earth continuity to the
  supply earth and record the reading.
- Do not fit an RCD to the compressor supply unless it is a type suitable for the
  motor's earth leakage and is selected so that nuisance tripping does not take
  the plant off air unexpectedly. Discuss with the electrician.

### 4.8 Commissioning checklist

Complete every line before the first loaded run. Record on the form at
Appendix A.

1. Package level within 3 mm, AV mounts free, not bolted down.
2. Clearances per Section 4.3 confirmed by measurement.
3. Ventilation installed and proved; extract fan interlocked and running.
4. Intake air path clear of solvent, steam and lint sources.
5. Transit brackets removed from the AV mounts and from the airend.
6. Oil level between MIN and MAX at the sight glass, machine cold.
7. Oil grade confirmed as Pilot SS-8000 and recorded.
8. Air outlet ball valve fitted, labelled and open.
9. Reticulation pressure tested and proved leak free.
10. Drop legs and drains fitted at all low points.
11. Condensate drains piped to the oil/water separator; separator commissioned.
12. Receiver safety valve fitted, sealed, set 10.5 bar, certificate on file.
13. Receiver registration VIC-PV-118-4602 confirmed and document filed.
14. Supply cable, protection and isolator confirmed by the electrician.
15. Earth continuity tested and recorded.
16. Phase rotation confirmed correct.
17. Star-delta transition confirmed at 6 s.
18. Motor thermistor circuit proved.
19. Controller parameters set per Section 7.4 and recorded.
20. Direction of airend rotation confirmed by a momentary bump start.
21. First start; monitor discharge temperature to stability.
22. Full load current measured on all three phases and recorded.
23. Load and unload setpoints proved by observation over three cycles.
24. Dew point confirmed at or below +5 °C after 30 minutes running.
25. All drains proved to open and close on their timer or level cycle.
26. Safety valve manually lifted and reseated (once only, at commissioning).
27. Emergency stop proved.
28. Automatic restart behaviour demonstrated to the plant operator.
29. Noise level checked with all panels fitted.
30. Operator instruction given and signed for.

---

## 5. Machine description

### 5.1 Air path

Air is drawn through the canopy intake louvre and the dry-type inlet air filter
element (PK-AF-3355) into the inlet valve. The inlet valve is a pneumatically
actuated butterfly valve controlled by the load solenoid. Open, the machine
compresses; closed, the machine idles against a nearly closed intake and consumes
about a third of full load power.

The airend (PK-AE-185) is a single-stage asymmetric-profile screw with a 5+6
rotor set, belt driven from the motor at a step-up ratio giving 3,540 rpm. Oil is
injected into the compression chamber to seal the rotor clearances, absorb the
heat of compression and lubricate the bearings. Discharge air leaves the airend
at 80 °C to 95 °C as an air/oil mixture at working pressure.

The mixture enters the separator vessel tangentially. Most of the oil drops out
by centrifugal action and gravity and returns to the sump, which is the lower
part of the same vessel. The remaining oil aerosol is removed by the coalescing
separator element (PK-SE-4720), which is a cartridge of glass fibre media in the
top of the vessel. A scavenge line with an orifice and a strainer draws the oil
that collects in the bottom of the element back into the airend inlet. A blocked
scavenge orifice is a common and easily missed cause of high oil carryover.

Air leaves the separator through the minimum pressure valve (PK-MPV-25), which is
a spring-loaded check valve set to open at 4.5 bar. It holds enough pressure in
the separator vessel at all times to keep the oil circulating and to keep air
velocity through the separator element within its design range. It also prevents
back-flow from the receiver into the separator when the machine unloads.

From the minimum pressure valve the air passes through the aftercooler — the
smaller of the two cores in the combined cooler block — where it drops to about
10 K above ambient. Cooling the air condenses most of the water it carries, which
is removed at the aftercooler moisture separator and dumped by the first
electronic drain. The air then enters the receiver, and from the receiver it
passes to the integrated refrigerated dryer and then to the filtration train and
the plant.

### 5.2 Oil path

Oil drains from the separator vessel sump under system pressure — there is no oil
pump. It passes to the thermostatic valve, which is a wax-element three-way valve
set to begin opening at **71 °C**. Below 71 °C the valve bypasses the oil cooler
and sends oil straight back to the airend, so the machine warms up quickly and
does not run cold and wet. Above 71 °C the valve progressively directs oil
through the oil cooler core.

From the thermostatic valve, oil passes through the spin-on oil filter
(PK-OF-2140), which is a 10 micron full-flow element with an internal bypass that
opens on a 2.5 bar differential. From the filter, oil is injected into the airend
compression chamber and into the two bearing feeds.

Discharge temperature is sensed at the airend outlet by a PT1000 sensor. Warning
at 105 °C (A02), shutdown at 110 °C (A01).

### 5.3 Cooling

A single axial fan draws room air through the intake louvre, across the combined
oil cooler and aftercooler block, and discharges it at the rear of the canopy.
The fan runs whenever the motor runs and for a run-on period after stopping. The
cooler block is aluminium bar-and-plate. In a laundry environment it blinds with
lint on the intake face, and cleaning it is a scheduled task (Section 9).

### 5.4 Control of load and unload

In AUTO the controller compares receiver pressure to the setpoints. At or below
the load setpoint (P02, 7.0 bar) it energises the load solenoid, the inlet valve
opens and the machine compresses. At or above the unload setpoint (P01, 8.0 bar)
it de-energises the load solenoid, the inlet valve closes, the blowdown valve
vents the separator vessel to about 1.5 bar, and the machine idles. If it idles
for longer than the idle run-on timer (P07, default 180 s) the motor stops and
the machine waits in standby. It restarts automatically when pressure falls to
P02, subject to the minimum stop time (P08, 90 s) which protects the motor from
excessive starts per hour.

### 5.5 Refrigerated dryer circuit

The dryer is a direct-expansion refrigerated dryer using R134a. Wet air from the
receiver enters the air-to-air heat exchanger, where it is pre-cooled by the cold
dry air leaving the dryer. It then enters the evaporator, where it is cooled to
about +2 °C and the water in it condenses. The condensate is separated in a
demister and dumped by the second electronic drain. The cold dry air returns
through the air-to-air exchanger, where it is re-warmed and the incoming air is
pre-cooled, and leaves at close to inlet temperature but with a pressure dew
point of about +3 °C.

The refrigerant circuit is a sealed hermetic compressor, an air-cooled condenser
sharing the package cooling air stream, a capillary expansion and the evaporator.
Load variation is handled by a hot gas bypass valve which maintains evaporator
pressure and prevents freezing at low air load. Dew point is displayed on the
controller and is the parameter that matters most to the plant (Section 6).

### 5.6 Automatic drains

Three electronic zero-loss drains (PK-ZD-12) are fitted: aftercooler separator,
dryer separator, and receiver. Each has a capacitive level sensor, a solenoid
valve and a test button. A zero-loss drain opens only when liquid is present and
closes before air escapes, so it does not waste air the way a timer drain does.
Each drain reports its own fault to the controller (A28 to A30).

The receiver also has a manual ball valve at the bottom centre. The manual valve
is the daily check and the depressurising point. The automatic drain does not
replace it.

### 5.7 Filtration train

Downstream of the dryer, in this order:

- **F1, general purpose particulate/coalescing pre-filter**, element PK-LF-030P,
  1 micron particulate, 0.5 mg/m³ residual oil. Protects F2.
- **F2, high efficiency coalescing filter**, element PK-LF-030C, 0.01 micron,
  0.01 mg/m³ residual oil.
- **F3, activated carbon adsorber**, element PK-LF-030A, 0.003 mg/m³ residual oil
  vapour, removes oil vapour and odour.

Each of F1 and F2 has a differential pressure indicator and an automatic drain
bowl. F3 has no drain and must never be installed where liquid can reach it —
liquid water destroys a carbon bed in hours.

The order is not negotiable. A carbon filter installed ahead of a coalescer is
ruined immediately. A coalescer installed without a pre-filter blocks in weeks.

---

## 6. Air quality for garment finishing

This section is the reason the filtration train exists and it is the section that
matters most on this site. Read it before changing any setting that affects air
quality, and read it again before deciding that a marked garment "must have come
in like that".

### 6.1 Why this matters here

Compressed air on this site goes to the presses, the steam-air finisher, the form
finisher, the shirt unit, the dry cleaning machines' pneumatics and the garment
conveyor. At the presses and the finishers the air is in direct contact with
customer garments, at pressure, often at the same moment steam and heat are being
applied.

If that air carries oil, the oil is deposited on the garment and driven into the
fibre by heat and pressure. If it carries water, the water marks the garment,
particularly on silk, acetate, viscose and any dyed natural fibre. Either way the
garment is damaged, and the damage is usually discovered by the customer and not
by the plant.

A garment marked by the compressed air system is a claim. It is a claim against
the business's bailee's liability cover, it is an excess payable, it is a
customer lost, and — because compressed air feeds every press — it is very rarely
a single garment. By the time one marked garment is identified, dozens have gone
out the door.

This is why the filter change intervals in Section 9 are treated as hard dates
and not as guidance, and why the dew point reading is on the daily log.

### 6.2 ISO 8573-1 classes

ISO 8573-1 classifies compressed air purity in three independent numbers, written
as a triplet: **solid particulate : water : oil**. A lower number is cleaner. The
triplet is always quoted in that order.

**Particulate (first digit)** — classified by the number of particles per cubic
metre in defined size bands. Class 1 and 2 are for critical processes. Class 3 is
a general industrial standard. Class 4 and above allow visible dust.

**Water (second digit)** — classified by pressure dew point. Class 1 is −70 °C,
Class 2 is −40 °C, Class 3 is −20 °C, **Class 4 is +3 °C**, Class 5 is +7 °C,
Class 6 is +10 °C. Classes 1 to 3 require a desiccant dryer. A refrigerated dryer
delivers Class 4.

**Oil (third digit)** — total oil, being aerosol plus liquid plus vapour, in
mg/m³. Class 1 is 0.01 mg/m³, Class 2 is 0.1 mg/m³, Class 3 is 1 mg/m³, Class 4
is 5 mg/m³. There is also **Class 0**, which means better than Class 1 by a
figure the supplier must state.

**The target for this installation is ISO 8573-1 Class 2:4:2** at every press and
finisher outlet, and that is what the train in Section 5.7 delivers when it is
maintained. Class 4 water is what a refrigerated dryer can achieve and is
adequate provided the plant never falls below 3 °C, which indoors in Bendigo it
does not. Class 2 oil, at 0.1 mg/m³ total oil, is the practical limit of a
coalescer plus carbon train and is low enough that garment marking does not occur.

**NOTICE.** "Oil-free compressor" and "oil-free air" are not the same thing. This
is an oil-flooded machine. It cannot produce oil-free air. What it produces,
correctly filtered, is air with an oil content low enough that it does not mark a
garment. That is a maintenance outcome, not a design outcome. Neglect the
filtration and this machine will put oil on clothing.

### 6.3 Pressure dew point and what goes wrong at the finisher

Pressure dew point is the temperature at which water will begin to condense out
of the compressed air **at line pressure**. It is not the same as atmospheric dew
point and the two must not be confused.

The rule is simple: **if any part of the air line downstream of the dryer is
colder than the pressure dew point, liquid water will form in the line at that
point.** Nothing else is required. It will happen every time.

At a correct +3 °C dew point, no part of an indoor plant is cold enough and the
line stays dry. As the dew point rises, the margin closes:

| Displayed dew point | Consequence |
|---|---|
| +3 °C to +5 °C | Normal. Line dry. No action. |
| +6 °C to +10 °C | Acceptable at high load or high ambient. Investigate if it persists at normal load. |
| +11 °C to +15 °C | Warning A32. Water will begin to appear in drop legs and filter bowls. Marking risk on cold mornings. |
| Above +15 °C | Alarm A33. Liquid water is reaching the presses. Stop using air on garments until resolved. |

At a press, water arrives in one of two forms. **Fine mist** produces a diffuse
damp patch that dries with a faint tide line — often mistaken for a pressing
mark. **A slug** — water that has collected in a low point and is then pushed
along by a demand surge — produces an unmistakable wet blotch, usually with a
hard-edged **ring mark** where the water spread and stopped. On a silk or acetate
garment a ring mark is generally permanent.

Causes of a rising dew point, in the order to check them: blinded dryer condenser
(most common); plant room ambient above 40 °C; compressor discharge temperature
high, sending hot air to the dryer above its 55 °C inlet limit; air flow above
the dryer's 3.6 m³/min rating; blocked dryer condensate drain, so separated water
is re-entrained; refrigerant undercharge; hot gas bypass valve out of adjustment;
failed dryer compressor. Only the last three are technician work.

### 6.4 Oil carryover and what it does to a garment

Oil reaching a garment comes from one of five places:

1. **Separator element at end of life or damaged.** Rising separator differential
   (A16 warning, A17 alarm) is the early indicator.
2. **Blocked separator scavenge line.** The element floods and passes oil. The
   symptom is high oil consumption with a normal-looking differential.
3. **Overfilled sump.** Oil above MAX floods the separator. This is why levelling
   the machine and reading the sight glass correctly matters.
4. **Wrong or degraded oil.** Mixed grades, or oil run past its interval, lose
   their separation characteristics.
5. **Line filter elements past their interval, bypassing or channelled.** A
   coalescing element does not fail visibly. It gets worse gradually and then it
   is simply not doing anything.

On a garment, oil carryover shows as:

- **Oil spotting** — small dark, translucent spots, sharper on light colours,
  that do not lift with water and do go darker when wet. Typically scattered in a
  pattern that follows where the air struck the fabric.
- **A general dulling or greying** on pale wool and silk, which is usually
  reported by the customer as "it came back looking dirty" rather than as a spot.
- **Delayed appearance.** Oil deposited today may not be visible for a week. This
  is why a carryover event is usually discovered as a cluster of complaints about
  garments finished on the same few days.

**WARNING.** Oil carryover onto a garment that is then pressed at temperature is
generally not reversible by re-cleaning. Do not assume a re-clean will fix it.

### 6.5 Testing air quality

Three levels of testing, all recorded on the form at Appendix D.

**Daily, by the operator.** Read the dew point on the controller and record it.
Check both filter differential indicators are in the green. Check the filter
bowls for liquid. Drain the receiver manually and look at what comes out — clear
water is expected; milky or oily water means carryover and must be reported.

**Weekly, by the maintainer.** At the furthest press from the compressor, open
the drop leg drain into a clean clear glass jar and inspect. Water is a dew point
problem. An oil film on the surface is a filtration problem. Do this at the
furthest point, because that is where problems show first.

**Six-monthly, by test.** A quantitative check at the press outlet.

- *Oil content* — a colorimetric oil indicator tube drawn through a measured air
  volume at the point of use. Reads total oil in mg/m³ directly. Compare against
  the 0.1 mg/m³ Class 2 target. Tubes have a shelf life; check the date.
- *Blotter test* — a coarse but useful check. Hold a clean white blotter card
  100 mm from the outlet in the air stream for 60 seconds. Allow to dry. Any
  discolouration, staining or translucent patch means oil is present in quantity.
  A clean card is not proof of Class 2, but a stained card is proof of failure.
  Keep the cards, dated, in the record.
- *Dew point* — verify the controller reading against a calibrated portable dew
  point meter at the dryer outlet. Controller sensors drift and a drifted sensor
  reading a comfortable +4 °C while the line runs at +14 °C is worse than no
  sensor at all.

### 6.6 What to do when a garment is marked by the air

Treat this as an incident, not as a one-off spoil.

1. **Quarantine the garment.** Do not attempt to spot it, re-clean it or press it
   again. Bag it, tag it with the docket number, the date and the machine it was
   finished on, and set it aside. It is the evidence.
2. **Stop using compressed air on garments** at the affected press until the air
   has been checked. If more than one press is affected, stop all of them. It is
   cheaper to lose half a day's finishing than to mark another two hundred
   garments.
3. **Sample the air at that press.** Open the drop leg drain into a clean jar.
   Run a blotter test. Read the dew point and both filter differentials. Record
   everything on the Appendix D form, including the time.
4. **Identify which it is.** Oil film in the jar, or a stained blotter, means
   oil — go to Section 6.4 and work through the five causes in order. Clear water
   in the jar with a clean blotter means water — go to Section 6.3.
5. **Check the drop leg first.** A very high proportion of "compressor" marking
   events turn out to be one drop leg that has never been drained, or a branch
   taken off the bottom of the main during a past alteration.
6. **Fix the cause, then flush.** After any repair, blow the affected branch to
   atmosphere through a clean hose for at least ten minutes before putting a
   garment near it. Repairing the compressor does not clean the pipe.
7. **Retest before resuming.** Blotter test clean, dew point at or below +5 °C,
   both differentials green, drop leg dry.
8. **Look backwards.** Work out how long the condition existed. Check the dew
   point log and the filter change dates. Identify what was finished in that
   window and expect complaints from it. Tell the counter what to look for.
9. **Record it.** Date, garments affected, cause found, action taken, retest
   result. If a claim follows, this record is what the insurer will want, and a
   maintained log showing filters changed on time is the difference between a
   claim that is paid and an argument about neglect.

---

## 7. Controls and display

### 7.1 Key layout

The controller is mounted in the canopy door at eye height. It has a four-line
backlit display, six keys and three lamps.

| Key | Function |
|---|---|
| START (green) | Starts the machine in the selected mode. |
| STOP (red) | Initiates the run-down cycle and stops the machine. Not an emergency stop. |
| MENU | Enters and exits the menu tree. |
| UP / DOWN | Scrolls menus and increments values. |
| ENTER | Selects a menu item, confirms a value, and acknowledges an alarm. |

Lamps: **green** steady = running loaded, flashing = running unloaded or in
standby awaiting demand; **amber** = warning active, machine still running;
**red** = alarm active, machine shut down.

The emergency stop is the separate red mushroom head on the panel face. It is not
one of the six keys. Pressing it removes the control supply and stops the machine
immediately without a run-down cycle. It latches. It is released by twisting.
Releasing it does not restart the machine; the alarm must then be acknowledged
with ENTER and the machine started with START.

**CAUTION.** Do not use the emergency stop for routine shutdown. Stopping without
a run-down cycle leaves the separator vessel at full pressure and oil in the
airend, and a subsequent start against that pressure loads the motor and the
belts heavily.

### 7.2 Home display

Line 1: status word — RUN LOADED, RUN UNLOAD, STANDBY, STOPPED, WARNING, ALARM.
Line 2: receiver pressure in bar and airend discharge temperature in °C.
Line 3: pressure dew point in °C and separator differential in bar.
Line 4: scrolling — total hours, loaded hours, next service due in hours.

### 7.3 Menu tree

```
MENU
 ├─ 1 STATUS
 │   ├─ 1.1 Pressures (receiver, separator, differential)
 │   ├─ 1.2 Temperatures (discharge, ambient, dryer evaporator)
 │   ├─ 1.3 Dew point
 │   ├─ 1.4 Motor current, per phase
 │   └─ 1.5 Drain status, three drains
 ├─ 2 COUNTERS
 │   ├─ 2.1 Total running hours
 │   ├─ 2.2 Loaded hours and load percentage
 │   ├─ 2.3 Motor starts
 │   ├─ 2.4 Hours to next service (each of the five counters)
 │   └─ 2.5 Reset service counter (password)
 ├─ 3 SETPOINTS (password)
 │   ├─ 3.1 Unload pressure P01
 │   ├─ 3.2 Load pressure P02
 │   └─ 3.3 Timers P07, P08
 ├─ 4 PARAMETERS (password)
 ├─ 5 ALARM LOG (last 50 events, code, text, hours, date)
 ├─ 6 SCHEDULER (weekly start/stop clock)
 └─ 7 SERVICE (technician password)
```

Two passwords are used. The **operator password (0000, changeable)** opens
counters reset and the scheduler. The **service password** opens parameters and
setpoints and is held by the servicing technician. Do not write the service
password on the canopy.

### 7.4 Parameter list

| No. | Parameter | Default | Range | Set on PK25-19-0883 |
|---|---|---|---|---|
| P01 | Unload pressure, bar | 8.0 | 5.0–10.0 | 8.0 |
| P02 | Load pressure, bar | 7.0 | 4.0–P01 minus 0.5 | 7.0 |
| P03 | Maximum pressure limit, bar | 10.0 | fixed | 10.0 |
| P04 | High pressure alarm, bar | 10.3 | fixed | 10.3 |
| P05 | Discharge temp warning, °C | 105 | 90–108 | 105 |
| P06 | Discharge temp trip, °C | 110 | fixed | 110 |
| P07 | Idle run-on time, s | 180 | 30–600 | 180 |
| P08 | Minimum stop time, s | 90 | 60–300 | 90 |
| P09 | Star-delta transition, s | 6 | 4–10 | 6 |
| P10 | Maximum starts per hour | 12 | 6–20 | 10 |
| P11 | Separator diff. warning, bar | 0.8 | 0.4–1.0 | 0.8 |
| P12 | Separator diff. alarm, bar | 1.2 | 0.8–1.5 | 1.2 |
| P13 | Oil filter interval, h | 2000 | 500–4000 | 2000 |
| P14 | Air filter interval, h | 2000 | 500–4000 | 2000 |
| P15 | Oil interval, h | 4000 | 1000–8000 | 2000 |
| P16 | Separator interval, h | 4000 | 1000–8000 | 2000 |
| P17 | Major service interval, h | 8000 | 4000–8000 | 8000 |
| P18 | Dew point warning, °C | 12 | 8–20 | 12 |
| P19 | Dew point alarm, °C | 15 | 10–25 | 15 |
| P20 | Drain cycle test interval, h | 168 | 24–336 | 168 |
| P21 | Ambient high warning, °C | 42 | 35–45 | 42 |
| P22 | Display units | bar/°C | bar/psi | bar/°C |
| P23 | Remote start enable | OFF | ON/OFF | OFF |
| P24 | Sequencing address | 0 | 0–8 | 0 |
| P25 | Scheduler enable | OFF | ON/OFF | ON |
| P26 | Automatic restart after power failure | ON | ON/OFF | ON |
| P27 | Auto restart delay, s | 20 | 5–120 | 20 |
| P28 | Fan run-on time, s | 60 | 0–300 | 60 |
| P29 | Operator password | 0000 | 0000–9999 | 0000 |
| P30 | Language | EN | EN/FR/DE/ES | EN |

**NOTICE.** P15 and P16 have been reduced from their 4,000 h defaults to 2,000 h
on this machine, because it runs above 70% duty in the September to November peak
and the plant room regularly exceeds 32 °C in summer. Do not return them to the
defaults.

### 7.5 Pressure setpoints for this plant

The presses and the finishers require a minimum of **6.2 bar at the machine** on
the head-down stroke. The dry cleaning machines' pneumatics require 6.0 bar. The
garment conveyor requires only 5.5 bar and its indexing drive is the least
demanding load on the plant.

Setting P02 (load) at 7.0 bar gives 0.8 bar of margin over the presses' 6.2 bar
requirement, which covers the pressure drop through the dryer, the three filters
and the ring main at full flow. Setting P01 (unload) at 8.0 bar gives a 1.0 bar
band, which is enough that the machine does not short-cycle.

**Do not raise the setpoints to cure a low pressure complaint at a press.** Every
1 bar of additional discharge pressure costs approximately 7% in energy on every
hour the machine runs, and it raises the load on the separator element. If a
press is starving, the cause is a restriction — an undersized branch, a blocked
filter, a throttled isolation valve, a collapsed hose or a leak — and raising the
setpoint pays for that restriction on every machine in the plant, forever.

Regulate down at each point of use. The conveyor should be regulated to 5.5 bar
at its own filter-regulator, not fed at 7 bar.

### 7.6 Service hour counters

Five independent counters run down from their intervals (P13 to P17). Each raises
a service due warning at 100 hours remaining (A19 to A23) and repeats it every
running hour once it reaches zero. A service due warning is a warning, not an
alarm: the machine keeps running. It will not stop itself when a service is
overdue, and it will not stop itself when the separator is finished.

To reset a counter after completing the work:

1. MENU, 2 COUNTERS, 2.5 RESET SERVICE COUNTER.
2. Enter the operator password.
3. Scroll to the counter for the work actually done.
4. Press ENTER. The display shows RESET? Press ENTER again to confirm.
5. Confirm the counter now reads the full interval.
6. Write the reset in the service history at Appendix C — date, hours, counter,
   parts used, who did it.

**Reset only the counter for the work you did.** Resetting all five because the
oil was changed destroys the record of when the separator was last done, and the
separator interval is the one that protects the garments.

### 7.7 Remote start and sequencing

**Remote start** (P23) transfers start and stop control to a volt-free contact on
terminals 11 and 12. When enabled, a closed contact runs the machine in AUTO and
an open contact stops it after run-down. The panel STOP key and the emergency
stop remain effective at all times; the panel START key does not.

**DANGER.** With remote start enabled the machine can be started by somebody who
is nowhere near it and cannot see it. Isolate and lock out before any work
regardless of the position of the remote contact.

**Sequencing** (P24) allows up to eight machines to share duty over a serial
link. Address 0 means the machine is standalone. This machine is the only
compressor on site and P24 is set to 0. If a second compressor is ever added,
both must be addressed and the changeover period set, or the two will fight each
other across overlapping pressure bands and both will run continuously.

**Scheduler** (P25, enabled on this machine) starts the compressor at 06:30 and
stops it at 18:00 Monday to Friday, and 07:30 to 13:30 Saturday, with Sunday off.
It exists to stop the machine sitting in standby overnight feeding leaks.

---

## 8. Operation

### 8.1 Before the first start of the day

1. Look at the machine. Any oil on the floor, any new noise reported, any panel
   open, anything leaning against the intake or the discharge — deal with it
   first.
2. Check the oil level at the sight glass. Cold and stopped, the level should be
   at or slightly above MAX. Do not add oil to a hot machine to make the glass
   look right.
3. Open the receiver manual drain briefly and observe what comes out. Record on
   the weekly log (Appendix B).
4. Confirm the outlet ball valve is open. Starting against a closed outlet valve
   raises pressure to the safety valve.
5. Confirm the plant room ventilation is running.

### 8.2 Starting

1. Close the isolator. The controller powers up and shows STOPPED.
2. Confirm no alarm is displayed. If one is, acknowledge and diagnose it before
   starting (Section 10).
3. Press START. The fan starts. The motor starts in star, transitions to delta
   after 6 seconds, and the machine runs unloaded for a brief period before
   loading.
4. Watch the discharge temperature rise. It should stabilise between 78 °C and
   95 °C within 15 minutes. A machine that climbs past 100 °C on a cool morning
   has a cooling problem and should be stopped.
5. Watch the dew point. It should fall to +5 °C or below within 30 minutes of the
   dryer running. Air should not be used on garments until it has.

### 8.3 Normal running

In AUTO the machine cycles: load at 7.0 bar, unload at 8.0 bar, idle for up to
180 seconds, stop, restart on demand. This is normal and correct. Frequent
loading and unloading with very short loaded periods means demand is low relative
to the machine — that is a leak question, not a fault.

Loaded percentage is the number to watch. Read it at MENU, 2.2. On this plant, a
loaded percentage above about 65% during ordinary production is normal. A loaded
percentage above 65% **before the plant starts in the morning, or after it
finishes at night, is leakage** and should be surveyed (Appendix E).

Record daily: receiver pressure, discharge temperature, dew point, separator
differential, total hours, loaded percentage, and the result of the receiver
drain check.

### 8.4 Shutdown

Press STOP. The machine unloads, blows down the separator vessel, runs the motor
briefly, stops, and runs the fan on for 60 seconds. Let the cycle finish. Do not
open the isolator during run-down; that leaves the separator vessel pressurised
and the airend full of hot oil.

For a normal overnight or weekend stop, leave the isolator closed and the
controller powered so that the electronic drains keep working and the scheduler
can restart the machine. Close the outlet ball valve if the plant is unattended
for more than a weekend, so that a leak downstream cannot empty and re-cycle the
machine all night.

### 8.5 Extended shutdown

For any shutdown longer than four weeks — a shutdown period, a relocation, a
machine held as a spare:

1. Stop normally and allow run-down to complete.
2. Isolate, lock out, and depressurise per Section 2.9. Leave the receiver drain
   open.
3. Drain the condensate from all three drains and from both filter bowls.
4. Close the outlet ball valve.
5. If the shutdown will exceed three months, run the machine loaded for 30
   minutes to bring the oil to temperature, then stop and drain the oil while
   hot, and refill with fresh oil. Old oil left standing in a cold machine
   separates and the acidic fraction attacks bearing surfaces.
6. Cover the intake louvre and the discharge to keep lint out. Label the cover.
7. Before returning to service, remove the covers, check the oil level, confirm
   phase rotation, bump start and confirm rotation direction, then start
   normally and monitor for a full hour.

### 8.6 Emergency stop and restart

Use the emergency stop only for an emergency — injury, fire, a garment or a
person caught, a burst line, a smell of burning, an unexplained noise that
suggests mechanical failure.

After an emergency stop:

1. Do not reset it until the reason for it has been established and dealt with.
2. Isolate and lock out if anyone is going to investigate inside the machine.
3. When the cause is resolved, twist the mushroom head to release.
4. Press ENTER to acknowledge the alarm.
5. Check the oil level and look for anything obviously wrong before restarting.
6. Press START and stand where you can watch the machine through the first
   loaded period.
7. Record the event and its cause in the service history. An emergency stop for
   an unexplained noise that is never investigated is how a bearing failure
   becomes an airend replacement.

---

## 9. Maintenance schedule

Intervals are running hours or elapsed time, whichever comes first. Every task
marked LOCKOUT requires Section 2.9 to be completed first. Times are for a
competent maintainer with the parts to hand.

### 9.1 Daily (operator, 5 minutes)

| Task | Part | Tool | Time |
|---|---|---|---|
| Check oil level, cold | — | — | 1 min |
| Drain receiver at manual valve, inspect discharge | — | — | 1 min |
| Read and record dew point | — | — | 1 min |
| Check F1 and F2 differential indicators in green | — | — | 1 min |
| Look and listen for leaks, oil, new noise | — | — | 1 min |

### 9.2 Weekly (maintainer, 20 minutes)

| Task | Part | Tool | Time |
|---|---|---|---|
| Press test button on all three drains, confirm discharge | — | — | 3 min |
| Drain furthest drop leg into a clean jar, inspect | — | Glass jar | 5 min |
| Check intake louvre and cooler face for lint | — | Torch | 3 min |
| Check plant room temperature at intake | — | Thermometer | 2 min |
| Record hours, loaded percentage, starts | — | — | 3 min |
| Confirm emergency stop unobstructed and labels legible | — | — | 2 min |

### 9.3 500 hours or 1 month (maintainer, 45 minutes) — LOCKOUT

| Task | Part | Tool | Time |
|---|---|---|---|
| Clean intake louvre and pre-screen | — | Vacuum, brush | 10 min |
| Blow cooler block from discharge side, low pressure | — | Air gun 200 kPa | 15 min |
| Inspect belts for cracking, glazing, dust | PK-BS-1150 | Torch | 5 min |
| Check belt tension | — | Tension gauge | 5 min |
| Drain filter bowls F1 and F2 manually | — | — | 3 min |
| Check hoses and fittings for chafe and weep | — | — | 7 min |

### 9.4 2,000 hours or 6 months (maintainer, 2 hours) — LOCKOUT

| Task | Part | Tool | Time |
|---|---|---|---|
| Change oil filter | PK-OF-2140 | Strap wrench | 15 min |
| Change inlet air filter element | PK-AF-3355 | — | 10 min |
| Change oil (P15 set to 2000 h on this machine) | PK-OIL-8000-20 × 1 | 24 mm socket, drum pump | 40 min |
| Change separator element (P16 set to 2000 h) | PK-SE-4720 | 17 mm socket, torque wrench | 45 min |
| Clean separator scavenge orifice and strainer | PK-SCV-08 | 13 mm spanner, wire | 10 min |
| Change F1 and F2 line filter elements | PK-LF-030P, PK-LF-030C | Filter bowl spanner | 15 min |
| Clean dryer condenser | — | Vacuum, fin comb | 20 min |
| Test all three drains under load | — | — | 10 min |
| Reset counters P13, P14, P15, P16 | — | — | 5 min |

### 9.5 4,000 hours or 12 months (technician, 3 hours) — LOCKOUT

| Task | Part | Tool | Time |
|---|---|---|---|
| All 2,000 h tasks | as above | | 2 h |
| Change activated carbon element | PK-LF-030A | Filter bowl spanner | 10 min |
| Replace drive belt set | PK-BS-1150 | 19 mm socket, tension gauge | 40 min |
| Service both electronic drains, receiver and dryer | PK-ZD-12K × 2 | Screwdriver set | 30 min |
| Check and record motor current, three phases, loaded | — | Clamp meter | 10 min |
| Check thermostatic valve operation, record warm-up | PK-TV-71 | — | 15 min |
| Oil sample for analysis (see Section 12) | PK-OSK-01 | Sample kit | 10 min |
| Verify safety valve seal intact and date | — | — | 5 min |
| Verify pressure sensors against a test gauge | — | Test gauge | 20 min |
| Verify dew point sensor against portable meter | — | Portable meter | 20 min |

### 9.6 8,000 hours or 24 months (technician, 6 hours) — LOCKOUT

| Task | Part | Tool | Time |
|---|---|---|---|
| All 4,000 h tasks | as above | | 3 h |
| Replace minimum pressure valve service kit | PK-MPV-25K | 24 mm spanner | 45 min |
| Replace inlet valve service kit | PK-IV-90K | 13 mm socket | 60 min |
| Replace blowdown valve | PK-BD-14 | 19 mm spanner | 20 min |
| Replace thermostatic valve element | PK-TV-71 | 32 mm spanner | 30 min |
| Replace all flexible oil hoses | PK-HS-SET25 | Spanner set | 60 min |
| Replace safety valve | PK-SV-105 | 32 mm spanner | 20 min |
| Check airend bearing condition by vibration analysis | — | Vibration meter | 30 min |
| Replace motor bearings (or at 20,000 h) | PK-MB-SET | Bearing tools | 120 min |
| Reset counter P17 | — | — | 5 min |

### 9.7 Annual, regardless of hours

| Task | By | Record |
|---|---|---|
| AS 3788 external pressure vessel inspection | Goldfields Plant Inspection Services | Inspection report on file |
| Confirm receiver registration VIC-PV-118-4602 current | Owner | Registration document |
| Oil/water separator cartridge change | Maintainer | Appendix C |
| Air quality test, oil tube and blotter | Maintainer | Appendix D |
| Leak survey of the reticulation | Maintainer | Appendix E |
| Electrical inspection, enclosure and earth | Licensed electrician | Test sheet |

Every four years the receiver requires an internal inspection through the
inspection opening by the competent person. The vessel must be isolated,
depressurised, drained, opened, ventilated and confirmed safe for entry of an
inspection instrument before this is attempted.

### 9.8 Oil and separator change, step by step

LOCKOUT. Allow at least 60 minutes cooling. The oil will still be hot enough to
burn. Wear gloves and eye protection. Have 20 L of waste container capacity ready
and absorbent to hand.

1. Run the machine loaded for 10 minutes so the oil is warm and carries the
   contaminants in suspension. Stop and let run-down complete.
2. Isolate, lock out, tag. Close the outlet ball valve. Open the receiver drain
   and the separator vessel manual vent. **Confirm zero at both gauges.**
3. Wait 60 minutes.
4. Place the waste container under the sump drain. Remove the sump drain plug
   with a 24 mm socket. Drain fully — about 12 L. Tilting is not necessary and
   the machine must not be tilted.
5. Remove the oil cooler drain plug and drain the cooler — about 3 L. Refit both
   plugs with new sealing washers and tighten to 45 Nm.
6. Remove the spin-on oil filter PK-OF-2140 with a strap wrench. Catch the oil in
   it. Wipe the sealing face. Smear clean new oil on the new filter's gasket.
   Fit and tighten by hand, then a further three-quarters of a turn. Do not use
   the wrench to tighten.
7. Remove the separator vessel lid bolts (six, 17 mm) in a diagonal sequence.
   Lift the lid clear. Note the orientation of the return line.
8. Lift out the old separator element PK-SE-4720. Note the position of the
   anti-static staple linking the element to the vessel — the replacement must
   have the same linkage. A separator element with no earth path builds a static
   charge and can ignite the oil mist.
9. Remove the scavenge line, clear the orifice PK-SCV-08 with a fine wire, and
   clean the strainer. Refit. This is the step most often skipped and it is the
   step that most often causes carryover.
10. Clean the lid sealing face and the vessel flange. Fit the new element with
    new gaskets, top and bottom, the right way up. Confirm the anti-static
    linkage is made.
11. Refit the lid. Tighten the bolts in a diagonal sequence in three stages to a
    final **32 Nm**. Do not overtighten; the gasket does the sealing.
12. Refill through the filler with **16 L** of Pilot SS-8000. Do not overfill.
    Refit the filler plug with a new O-ring.
13. Remove the vent, close the receiver drain, remove locks and tags, restore
    supply.
14. Start and run unloaded for 5 minutes. Stop. Check for leaks. Check the oil
    level at the sight glass — it will have dropped as the system filled. Top up
    to MAX **cold and depressurised only**.
15. Run loaded for 30 minutes. Check the separator differential at the display —
    a new element reads 0.2 to 0.4 bar.
16. Reset counters P15 and P16. Record on Appendix C with the date, hours, part
    numbers and batch numbers, and the volume of oil used.
17. Dispose of the waste oil, the filter and the old element through the licensed
    waste contractor. Oil-soaked separator media is not general waste.

### 9.9 Line filter element change

LOCKOUT and depressurise the filter housings — each has its own vent. Support the
bowl, unscrew it with the bowl spanner, and lower it. Remove the element by
unscrewing it from the head. Note the differential indicator reading before
changing and record it; the trend matters more than the absolute number. Fit the
new element hand tight only. Inspect and lubricate the bowl O-ring with the
supplied grease. Refit the bowl and pressurise slowly. Check for leaks.

Change F1 and F2 at 2,000 h or 6 months and F3 at 4,000 h or 12 months
**regardless of what the differential indicator shows**. A coalescing element's
differential rises with particulate loading, not with oil loading, so an element
can be saturated with oil and passing it downstream while its indicator is still
green. The indicator is a blockage warning, not a life indicator.

### 9.10 Dryer condenser cleaning

The dryer condenser sits in the package cooling air stream and blinds with lint.
A blinded condenser raises condensing pressure, the dryer loses capacity, dew
point climbs and water goes to the presses. It is the single most common cause of
A32 and A33.

LOCKOUT. Remove the right-hand service panel. Vacuum the face of the condenser
from the air-entry side. Then blow through from the **discharge** side at no more
than 200 kPa, which pushes the lint back out the way it came. Straighten bent
fins with a fin comb. Vacuum the debris out of the base of the canopy — do not
leave it there to be drawn back onto the cooler.

Do not use water, solvent or detergent on the condenser.

### 9.11 Drain testing

Weekly, press the test button on each drain and confirm a short discharge of
liquid followed by the valve closing. Signs of a failing drain: continuous air
discharge (valve not seating — air is being wasted and the plant is paying for
it); no discharge at all (valve blocked or coil failed — water is accumulating
where it will eventually be carried over); and cycling every few seconds with
nothing coming out (level sensor fouled).

Annually, strip both the receiver and dryer drains and fit service kit PK-ZD-12K:
new valve seat, diaphragm, O-rings and inlet strainer. Clean the capacitive
sensor probe with a lint-free cloth and isopropyl alcohol. Do not scrape it.

---

## 10. Fault codes

Codes beginning A are displayed on the controller with the message shown. A code
in the **Alarm** column marked S shuts the machine down and requires
acknowledgement with ENTER before restart. A code marked W is a warning: the
machine keeps running and the amber lamp lights.

The **Tech** column says whether a technician is required. Where it says No, the
operator check listed is the whole of what an operator may do. Where it says Yes,
stop, record the code and the hours, and call. Do not clear an alarm repeatedly
to keep the plant running — the alarm log records every occurrence and a machine
restarted six times on the same alarm is a machine that is being destroyed.

| Code | Message | Alarm | Likely cause | Operator check | Tech |
|---|---|---|---|---|---|
| A01 | DISCHARGE TEMP HIGH — TRIP | S | Discharge above 110 °C | Cooler face lint, ventilation running, plant room temperature, oil level | Yes |
| A02 | DISCHARGE TEMP WARNING | W | Discharge above 105 °C | As A01, before it trips | No |
| A03 | AMBIENT TEMP HIGH | W | Intake air above 42 °C | Ventilation fan running, extract damper position, doors | No |
| A04 | DISCHARGE PRESSURE HIGH | S | Receiver above 10.3 bar | Outlet ball valve closed, downstream valve shut | Yes |
| A05 | PRESSURE SENSOR FAULT | S | PT1 open or short circuit | None | Yes |
| A06 | SEPARATOR PRESSURE SENSOR FAULT | S | PT2 open or short circuit | None | Yes |
| A07 | MOTOR OVERLOAD | S | Overload relay tripped | Belt condition, obstruction, unusual noise | Yes |
| A08 | MOTOR THERMISTOR TRIP | S | Motor winding over temperature | Ventilation, plant room temperature, starts per hour | Yes |
| A09 | FAN MOTOR OVERLOAD | S | Fan overload tripped | Obstruction at fan, debris in canopy | Yes |
| A10 | PHASE FAILURE | S | One supply phase lost | Isolator closed, upstream protection, other plant affected | Yes |
| A11 | PHASE REVERSAL | S | Supply phases transposed | Recent electrical work or generator changeover | Yes |
| A12 | SUPPLY VOLTAGE LOW | S | Below 376 V | Other plant starting on same supply | Yes |
| A13 | SUPPLY VOLTAGE HIGH | S | Above 424 V | None | Yes |
| A14 | DISCHARGE TEMP SENSOR FAULT | S | PT1000 open or short circuit | None | Yes |
| A15 | DEW POINT SENSOR FAULT | W | Sensor open, short or out of range | None | Yes |
| A16 | SEPARATOR DIFFERENTIAL HIGH | W | Differential above 0.8 bar | Hours since last separator change | No |
| A17 | SEPARATOR DIFFERENTIAL ALARM | S | Differential above 1.2 bar | As A16. Do not restart repeatedly | Yes |
| A18 | OIL LEVEL LOW | S | Level switch made | Sight glass level, visible leaks, oil on floor | No |
| A19 | SERVICE DUE — OIL FILTER | W | P13 counter expired | Book the service | No |
| A20 | SERVICE DUE — AIR FILTER | W | P14 counter expired | Book the service | No |
| A21 | SERVICE DUE — OIL | W | P15 counter expired | Book the service | No |
| A22 | SERVICE DUE — SEPARATOR | W | P16 counter expired | Book the service. This one affects garments | No |
| A23 | SERVICE DUE — MAJOR | W | P17 counter expired | Book the technician | No |
| A24 | EMERGENCY STOP ACTIVE | S | Mushroom head latched in | Establish why before releasing | No |
| A25 | STARTS PER HOUR EXCEEDED | W | More than P10 starts in an hour | Large leak, or P07 idle time too short | No |
| A26 | MOTOR STARTER FAULT | S | Delta contactor did not confirm | None | Yes |
| A27 | CONTROLLER MEMORY FAULT | S | Parameter checksum failed | None | Yes |
| A28 | DRAIN 1 FAULT — AFTERCOOLER | W | No cycle, or continuous cycle | Press test button, listen for discharge | No |
| A29 | DRAIN 2 FAULT — DRYER | W | No cycle, or continuous cycle | Press test button; check for water in filter bowls | No |
| A30 | DRAIN 3 FAULT — RECEIVER | W | No cycle, or continuous cycle | Press test button; drain manually meanwhile | No |
| A31 | DRYER HIGH CONDENSING PRESSURE | W | Condenser blinded or ambient high | Condenser face lint, ventilation, plant room temperature | No |
| A32 | DEW POINT HIGH — WARNING | W | Dew point above 12 °C | Condenser face, ambient, air demand. Check drop legs for water | No |
| A33 | DEW POINT HIGH — ALARM | S | Dew point above 15 °C | Stop using air on garments. Section 6.3 | Yes |
| A34 | DRYER REFRIGERANT FAULT | S | Low pressure switch or dryer compressor failure | None | Yes |

### 10.1 Troubleshooting the eight most common

**A01 / A02 — high discharge temperature.** In this plant this is nearly always
airflow, not oil. Work in this order: is the plant room ventilation fan running,
and is the extract damper in the summer position; is the cooler block face
blinded with lint (look with a torch from the intake side, and note that a cooler
can look clean from the front and be packed solid two rows in); is the plant room
temperature above 45 °C at the intake; is the oil level correct and the oil the
right grade and within its interval; is the thermostatic valve stuck open, which
shows as a machine that never warms up properly at first and then overheats under
load. A machine that trips A01 repeatedly is cooking its oil, and cooked oil
carries over. Do not keep resetting it.

**A04 — high discharge pressure.** Almost always a closed valve. Check the
package outlet ball valve, then any isolation valve on the ring main that has
been closed for work and not reopened. If all valves are open and pressure still
climbs past 10.3 bar, the pressure sensor or the load solenoid has failed and the
machine must be stopped — the safety valve at 10.5 bar is the last protection and
it is not intended to operate routinely.

**A07 — motor overload.** Check first for a mechanical cause: a belt that has
jumped, a seized fan, a foreign object in the canopy, an audible bearing. Then
check whether the machine is running at a higher pressure than it should — a
setpoint that has been raised to cure a starving press will overload the motor on
a hot day. Then have the technician measure current on all three phases loaded;
an imbalance greater than 5% points at the supply or the windings.

**A08 — motor thermistor trip.** Distinguish this from A07. A08 means the winding
is hot, which is caused by high ambient, poor ventilation, too many starts per
hour, or an under-voltage. Check P10 and the starts counter. A machine that is
starting fifteen times an hour because a leak is bleeding the receiver down will
cook its own motor.

**A10 / A11 — phase failure and phase reversal.** Both follow electrical work
somewhere on the site. A10 means a phase has been lost — check the upstream
protection and check whether other three-phase plant is also affected before
suspecting the compressor. A11 means two phases have been transposed and is
serious: the airend must never be run in reverse. Do not attempt to "test it
briefly". Have the electrician correct the rotation at the supply and prove it.

**A16 / A17 — separator differential.** The differential across the separator
element rises as the media loads. At 0.8 bar the element has done its useful life
and the machine is paying an energy penalty; at 1.2 bar it is at risk of
rupturing, and a ruptured separator dumps oil straight into the receiver and down
the line to the presses. **A17 is a garment risk, not just a machine risk.**
Change the element and clear the scavenge orifice at the same time. If a new
element reads high differential immediately, the gauge or its sensing line is at
fault, not the element.

**A31 / A32 / A33 — dryer and dew point.** Start at the condenser, every time.
Vacuum and blow it out per Section 9.10 and give it thirty minutes. In a laundry
this fixes it four times out of five. If dew point is still climbing: check air
flow is within the dryer's 3.6 m³/min rating; check the dryer inlet temperature
is below 55 °C, which it will not be if the aftercooler is also blinded; check
the dryer drain is cycling (A29), because a dryer whose drain has failed
re-entrains the water it has just condensed. Beyond that it is refrigerant
charge, hot gas bypass adjustment or the dryer compressor, all of which need a
licensed refrigeration technician. **While A33 stands, do not put air on
garments.**

**A28 / A29 / A30 — drain faults.** Press the test button. If nothing comes out,
the strainer is blocked or the coil has failed — fit service kit PK-ZD-12K. If
air blows continuously, the seat is not closing; that wastes a measurable amount
of air and money, and on the dryer drain it also drops dryer performance. If the
drain cycles constantly with nothing discharging, the capacitive probe is fouled
with oil and needs cleaning. Until the drain is fixed, drain that point manually
at least twice a day, and note that a failed receiver drain is a pressure vessel
corrosion issue as well as an air quality one.

---

## 11. Consumables and spare parts

Order by part number and quote the machine serial number PK25-19-0883.

### 11.1 Consumables

| Part number | Description | Interval |
|---|---|---|
| PK-OIL-8000-20 | Pilot SS-8000 semi-synthetic fluid, ISO VG 46, 20 L pail | 2,000 h / 12 months |
| PK-OF-2140 | Spin-on oil filter, 10 micron | 2,000 h / 6 months |
| PK-AF-3355 | Inlet air filter element, dry panel | 2,000 h / 6 months |
| PK-SE-4720 | Separator element with anti-static linkage | 2,000 h / 12 months |
| PK-LF-030P | F1 particulate pre-filter element, 1 micron | 2,000 h / 6 months |
| PK-LF-030C | F2 coalescing element, 0.01 micron | 2,000 h / 6 months |
| PK-LF-030A | F3 activated carbon element | 4,000 h / 12 months |
| PK-SCV-08 | Scavenge orifice and strainer kit | With separator |
| PK-ZD-12K | Zero-loss drain service kit | 12 months, each drain |
| PK-OSK-01 | Oil sample kit, bottle, label and prepaid pack | 12 months |
| PK-GSK-25 | Sealing washer and O-ring set, oil circuit | With oil change |

### 11.2 Wearing parts

| Part number | Description | Typical life |
|---|---|---|
| PK-BS-1150 | Drive belt set, 2 × SPA 1150 matched pair | 4,000 h |
| PK-ZD-12 | Electronic zero-loss condensate drain, complete | 5 years |
| PK-MPV-25K | Minimum pressure valve service kit | 8,000 h |
| PK-IV-90K | Inlet valve service kit, diaphragm and seals | 8,000 h |
| PK-BD-14 | Blowdown solenoid valve | 8,000 h |
| PK-TV-71 | Thermostatic valve element, 71 °C | 8,000 h |
| PK-SV-105 | Safety valve, set 10.5 bar, certified | 8,000 h / 24 months |
| PK-HS-SET25 | Flexible oil hose set, four hoses | 8,000 h |
| PK-MB-SET | Motor bearing set, drive and non-drive | 20,000 h |
| PK-PS-01 | Pressure sensor PT1, 0–16 bar | On failure |
| PK-TS-01 | Discharge temperature sensor, PT1000 | On failure |
| PK-DPS-01 | Dew point sensor | On failure |
| PK-LBL-25 | Safety label set, complete | On damage |

### 11.3 Major assemblies

| Part number | Description |
|---|---|
| PK-AE-185 | Airend assembly, exchange unit |
| PK-MPV-25 | Minimum pressure valve, complete |
| PK-MOT-185 | Motor, 18.5 kW, IE3, IP55, with thermistors |
| PK-CTL-3 | Controller, Rev 3 firmware |
| PK-FAN-25 | Cooling fan and motor assembly |
| PK-COOL-25 | Combined oil cooler and aftercooler block |

### 11.4 Recommended stock to hold on site

Holding these on the shelf means a failure does not take the plant off air, and
means a filter change is never deferred because the part has to be ordered.

| Quantity | Part number |
|---|---|
| 2 | PK-OIL-8000-20 |
| 2 | PK-OF-2140 |
| 2 | PK-AF-3355 |
| 1 | PK-SE-4720 |
| 2 | PK-LF-030P |
| 2 | PK-LF-030C |
| 1 | PK-LF-030A |
| 1 | PK-BS-1150 |
| 2 | PK-ZD-12K |
| 1 | PK-ZD-12 |
| 1 | PK-GSK-25 |

---

## 12. Warranty and service

### 12.1 Terms

Pilot warrants the K25 package against defects in materials and workmanship for
**24 months from the date of commissioning or 6,000 running hours, whichever
occurs first**, and warrants the airend rotor set and casing for **60 months or
20,000 running hours, whichever occurs first**, subject to the conditions in this
section.

The warranty covers the supply of replacement parts and the reasonable labour to
fit them at the machine's installed location during ordinary business hours. It
does not cover travel outside 100 km of the nearest authorised service agent,
after-hours attendance, crane or rigging costs, or the cost of hiring temporary
air.

Claims must be made in writing within 14 days of the fault being discovered, must
quote the machine serial number, and must be accompanied by the service history
and the oil analysis reports required by Section 12.3.

Nothing in this warranty excludes, restricts or modifies any right or remedy that
cannot lawfully be excluded, restricted or modified under the Australian Consumer
Law.

### 12.2 Exclusions

The warranty does not cover:

- Consumables and wearing parts listed in Sections 11.1 and 11.2, except where
  they fail within their normal life as a direct result of a covered defect.
- Damage caused by operation outside the specification in Section 3 — ambient
  above 45 °C, supply voltage outside ±6%, pressure above 10.0 bar, or altitude
  above 1,000 m.
- Damage caused by contaminated intake air, including halogenated or hydrocarbon
  solvent vapour, lint, fibre and steam. In a dry cleaning plant this is the
  exclusion most likely to be relied on, and Section 4.1 sets out what is
  required to avoid it.
- Damage caused by condensate, corrosion or water carryover arising from failure
  to drain the receiver or maintain the drains.
- Damage caused by incorrect, mixed, contaminated or degraded oil.
- Damage caused by running in reverse rotation.
- Any consequential loss, including loss of production, loss of profit, and the
  cost of garments damaged by air quality.

**NOTICE.** The last exclusion deserves attention on this site. Damage to
garments caused by oil or water carryover is not recoverable from the compressor
manufacturer under any circumstances. It sits with the business and with the
business's bailee's liability cover. That is why Section 6 is written the way it
is.

### 12.3 The oil analysis requirement

Warranty on the airend beyond the initial 24 months is conditional on an oil
sample being taken at each 4,000 h or 12-month service, sent for analysis, and
the report retained.

Take the sample from the running machine at the sample point on the oil line
downstream of the filter, after the machine has been loaded for at least 20
minutes. Purge at least 200 mL before filling the bottle. Label with the serial
number, the date, the total hours and the hours on the oil. Use kit PK-OSK-01.

The analysis reports viscosity, oxidation, acid number, water content, silicon,
iron, copper, chromium and aluminium. The values that matter:

| Measure | Normal | Investigate | Change immediately |
|---|---|---|---|
| Viscosity at 40 °C, cSt | 43–49 | 40–43 or 49–54 | Outside 40–54 |
| Acid number, mg KOH/g | Below 0.5 | 0.5–1.0 | Above 1.0 |
| Water, ppm | Below 300 | 300–1,000 | Above 1,000 |
| Iron, ppm | Below 20 | 20–50 | Above 50 |
| Silicon, ppm | Below 15 | 15–30 | Above 30 |

Rising silicon means dirt is getting past the inlet filter. Rising iron with
rising acid number means the oil has oxidised and is attacking the machine.
Elevated chlorine or an unexplained acid number in a dry cleaning plant points at
solvent vapour in the intake air, which is a Section 4.1 problem and not an oil
problem.

### 12.4 What voids the warranty

- Use of any oil other than Pilot SS-8000 or an oil formally approved in writing.
- Use of non-genuine separator elements, oil filters or inlet filters.
- Alteration of the maximum pressure parameter P03 or the high pressure alarm
  P04.
- Alteration or removal of the safety valve, or breaking its seal.
- Any welding, drilling or attachment to the receiver.
- Defeating the door interlock, removing a guard, or disabling a protective
  device.
- Continuing to operate after an alarm has been repeatedly cleared without the
  fault being rectified. The alarm log is downloaded as part of any claim
  assessment and it shows this clearly.
- Service work carried out by a person who is not competent, or electrical work
  by a person who is not licensed.

### 12.5 Service contact

Service is provided by the authorised Pilot agent for the region. Record the
current agent's name, telephone number and after-hours number on the inside of
the canopy door, and confirm it annually. Have the serial number, the fault code,
the total hours and the alarm log ready before calling.

---

## 13. Appendices

### Appendix A — Commissioning record

Machine: Pilot K25 · Serial: PK25-19-0883 · Site: Bendigo plant room

| Item | Value / result | Checked by | Date |
|---|---|---|---|
| Date of commissioning | | | / / |
| Supply voltage measured, L1-L2 / L2-L3 / L3-L1 | | | / / |
| Phase rotation confirmed correct | | | / / |
| Earth continuity, ohms | | | / / |
| Full load current L1 / L2 / L3, A | | | / / |
| Star-delta transition time, s | | | / / |
| Oil grade and batch | | | / / |
| Oil quantity charged, L | | | / / |
| P01 unload pressure set, bar | | | / / |
| P02 load pressure set, bar | | | / / |
| Discharge temperature at stability, °C | | | / / |
| Dew point at 30 minutes, °C | | | / / |
| Separator differential, new element, bar | | | / / |
| Safety valve set pressure and seal number | | | / / |
| Receiver registration number | | | / / |
| Ventilation air flow measured, m³/h | | | / / |
| Plant room temperature at intake, °C | | | / / |
| All three drains proved | | | / / |
| Emergency stop proved | | | / / |
| Noise level at 1 m, dB(A) | | | / / |
| Operator instruction given to | | | / / |

Commissioned by (print, sign): ......................................

Accepted for the occupier (print, sign): ......................................

### Appendix B — Weekly log sheet

Week commencing ...... / ...... / ............

| Day | Hours | Loaded % | Receiver bar | Discharge °C | Dew point °C | Sep. diff. bar | Drain check | Initials |
|---|---|---|---|---|---|---|---|---|
| Mon | | | | | | | | |
| Tue | | | | | | | | |
| Wed | | | | | | | | |
| Thu | | | | | | | | |
| Fri | | | | | | | | |
| Sat | | | | | | | | |

Drain check: record C for clear water, M for milky, O for oil film. Any M or O
must be reported the same day and investigated under Section 6.6.

Weekly checks completed: drains tested ☐ · drop leg sampled ☐ · lint check ☐ ·
plant room temperature ...... °C · labels legible ☐ · leaks noted below.

Notes and anything unusual: ...................................................

### Appendix C — Service history sheet

| Date | Hours | Work done | Part numbers used | Counters reset | By | Signature |
|---|---|---|---|---|---|---|
| / / | | | | | | |
| / / | | | | | | |
| / / | | | | | | |
| / / | | | | | | |
| / / | | | | | | |
| / / | | | | | | |
| / / | | | | | | |

Record oil batch numbers in full. Record the separator element part number and
the differential reading after fitting. Record every alarm that was cleared and
what was done about it.

### Appendix D — Air quality test record

Test point: ................................ (name the press or finisher)

| Date | Dew point °C | F1 diff. | F2 diff. | Drop leg sample | Blotter result | Oil tube mg/m³ | ISO class achieved | By |
|---|---|---|---|---|---|---|---|---|
| / / | | | | | | | : : | |
| / / | | | | | | | : : | |
| / / | | | | | | | : : | |
| / / | | | | | | | : : | |

Target: ISO 8573-1 Class 2:4:2 at every press and finisher outlet.

Blotter result: record CLEAN, TRACE or STAINED. Retain the dated card with this
sheet.

Incidents — complete one block per marked garment event:

Date ...... / ...... / ...... Time .......... Press/finisher ................
Docket number .................. Garment and fibre ...........................
Mark type: oil spotting ☐ water mark ☐ ring mark ☐ general dulling ☐
Dew point at time ...... °C · Drop leg sample ................ · Blotter ......
Cause found ..................................................................
Action taken .................................................................
Branch flushed for ...... minutes · Retest clean ☐ · Date returned to service
...... / ...... / ...... · Garments in the affected window: from ...... / ......
to ...... / ...... · Counter notified ☐ · Insurer notified ☐

### Appendix E — Energy use and leak survey

**Energy.** At 19.6 kW absorbed loaded and 6.2 kW unloaded, the running cost is
driven almost entirely by loaded hours. Estimate annual consumption as:

kWh = (loaded hours × 19.6) + (unloaded hours × 6.2)

Read loaded hours and total hours at MENU 2.1 and 2.2 and take the difference.
Record both at the same time each month so the figures are comparable.

Two levers matter and only two. The first is **pressure**: each 1 bar reduction
in discharge pressure saves about 7% of the energy. Do not run at 8 bar to serve
a plant that needs 6.2 bar at the press if the pressure drop can be fixed
instead. The second is **leakage**: air that leaks is compressed at full cost and
does no work.

**Leak survey method.** Carry out annually, and whenever loaded percentage rises
without a change in production.

1. Choose a time when the plant is shut down and every machine is off but the
   compressor is on and the ring main is at pressure — early on a Sunday, or
   after the last press stops on a weekday.
2. Close the drop valve at each machine so that only the ring main and the
   permanent pipework are live.
3. Note the receiver pressure and start a stopwatch. Record the number of load
   events and the total loaded time over 30 minutes at MENU 2.2.
4. Leakage in m³/min = 3.05 × (loaded seconds ÷ total seconds).
5. Express as a percentage of capacity. Below 10% is good for a plant of this
   age. Between 10% and 20% is worth a morning's work. Above 20% means the
   compressor is running a substantial part of every day to feed holes.
6. With the plant silent, walk the whole reticulation and listen. Start at the
   presses and the finishers, then the dry cleaning machine pneumatic panels,
   then the conveyor drive and indexing cylinders, then every quick-release
   coupling, then every drop leg drain, then the filter bowls and the drains on
   the package itself.
7. The usual offenders, in order: quick-release couplings, press foot valves and
   their hoses, cylinder rod seals on the conveyor indexer, thread tape joints
   disturbed by past alterations, and drain valves that are not seating.
8. Tag every leak found with a numbered tag as you find it. Repair them in a
   single planned outage rather than one at a time, and re-run the measurement
   afterwards to prove the result.
9. Record the before and after figures on this sheet.

| Date | Loaded s in 30 min | Leakage m³/min | % of FAD | Leaks tagged | Leaks repaired | Re-test m³/min | By |
|---|---|---|---|---|---|---|---|
| / / | | | | | | | |
| / / | | | | | | | |
| / / | | | | | | | |

---

*End of manual PK25-OM-EN Rev 3. Pilot K25, serial PK25-19-0883.*
