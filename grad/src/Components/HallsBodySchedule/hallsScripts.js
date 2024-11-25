import { useState } from "react";
import AddInfoHalls from "../AddInfo/AddInfoHalls";
import AddOnHover from "../AddOnHover/AddOnHover";
import FirstColumnCellHalls from "../UserCells/FirstColumnCell/FirstColumnCellHalls";
import CRUDOnHoverLecture from "../CRUDOnHover/CRUDOnHoverLecture";
import { halls } from "./generateHalls";

console.log(halls);
export function useScheduleCells(day,suffix) {
    const [cellStates, setCellStates] = useState({}); 
    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }
    const suffixes = suffix;
    const cells = [];
    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = halls[`${day.toLowerCase()}8${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}8${suffixes[i]}`; // Unique key for each cell
        
        cells.push(
            <td rowSpan={currentSchedule?.duration} key={i} className="relative">
                {!currentSchedule && (
                    <AddOnHover 
                     handle={() => toggleCellState(cellKey)}
                      tr={cellStates[cellKey]}
                      />
                )}
                {cellStates[cellKey] && !currentSchedule?
                 <AddInfoHalls 
                 cancel={() => toggleCellState(cellKey)} 
                 day={day.toLowerCase()}
                 start={8}
                 hallNumber={suffixes[i]}
                 />:null}
                {currentSchedule && (
                    <FirstColumnCellHalls
                        doc={currentSchedule?.professor}
                        subject={currentSchedule?.course}
                        year={currentSchedule?.year}
                        section={currentSchedule?.department}
                        group={currentSchedule?.groupNumber}
                        course={currentSchedule?.course}
                        professor={currentSchedule?.professor}
                        department={currentSchedule?.department}
                        groupNumber={currentSchedule?.groupNumber}
                        duration={currentSchedule?.duration}
                        id={currentSchedule?.lectureID}
                        show={cellStates[cellKey]}
                        onToggle={() => toggleCellState(cellKey)}
                    />
                )}                 
                 {currentSchedule &&
                  <CRUDOnHoverLecture   
                    id={currentSchedule?.lectureID}
                    show={cellStates[cellKey]}
                    onToggle={() => toggleCellState(cellKey)}
                  />}
            </td>
        );
    }
    return cells;
}

export const useScheduleCells2 = (day, suffix) => {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell

    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }

    const suffixes = suffix;
    const cells = [];

    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = halls[`${day.toLowerCase()}8${suffixes[i]}`];
        const currentSchedule2 = halls[`${day.toLowerCase()}9${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}9${suffixes[i]}`; // Unique key for each cell
        cells.push(
            currentSchedule?.duration >= 2 ? null :
                <td rowSpan={currentSchedule2?.duration} key={i} className="relative">
                    {!currentSchedule2 && (
                        <AddOnHover handle={() => toggleCellState(cellKey)} tr={cellStates[cellKey]}/>
                    )}
                    {cellStates[cellKey] && !currentSchedule2 && (
                        <AddInfoHalls 
                        cancel={() => toggleCellState(cellKey)} 
                        day={day.toLowerCase()}
                        start={9}
                        hallNumber={suffixes[i]}
                        />
                    )}
                    {currentSchedule2 && (
                        <FirstColumnCellHalls
                        doc={currentSchedule2?.professor}
                        subject={currentSchedule2?.course}
                        year={currentSchedule2?.year}
                        section={currentSchedule2?.department}
                        group={currentSchedule2?.groupNumber}
                        course={currentSchedule2?.course}
                        professor={currentSchedule2?.professor}
                        department={currentSchedule2?.department}
                        groupNumber={currentSchedule2?.groupNumber}
                        duration={currentSchedule2?.duration}
                        id={currentSchedule2?.lectureID}
                        show={cellStates[cellKey]}
                        onToggle={() => toggleCellState(cellKey)}
                        />
                    )}
                    {currentSchedule2 && <CRUDOnHoverLecture  id={currentSchedule2?.lectureID} show={cellStates[cellKey]}
                    onToggle={() => toggleCellState(cellKey)}/>}
                </td>
        );
    }

    return cells;
};
export const useScheduleCells3 = (day, suffix) => {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell

    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }

    const suffixes = suffix;
    const cells = [];
    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = halls[`${day.toLowerCase()}8${suffixes[i]}`];
        const currentSchedule2 = halls[`${day.toLowerCase()}9${suffixes[i]}`];
        const currentSchedule3 = halls[`${day.toLowerCase()}10${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}10${suffixes[i]}`; // Unique key for each cell

        cells.push(
            currentSchedule?.duration >= 3 || currentSchedule2?.duration >= 2 ? null :
                <td rowSpan={currentSchedule3?.duration} key={i} className="relative">
                    {!currentSchedule3 && (
                        <AddOnHover handle={() => toggleCellState(cellKey)} tr={cellStates[cellKey]}/>
                    )}
                    {cellStates[cellKey] && !currentSchedule3 && (
                        <AddInfoHalls 
                        cancel={() => toggleCellState(cellKey)} 
                        day={day.toLowerCase()}
                        start={10}
                        hallNumber={suffixes[i]}
                        />
                    )}
                    {currentSchedule3 && (
                        <FirstColumnCellHalls
                        doc={currentSchedule3?.professor}
                        subject={currentSchedule3?.course}
                        year={currentSchedule3?.year}
                        section={currentSchedule3?.department}
                        group={currentSchedule3?.groupNumber}
                        course={currentSchedule3?.course}
                        professor={currentSchedule3?.professor}
                        department={currentSchedule3?.department}
                        groupNumber={currentSchedule3?.groupNumber}
                        duration={currentSchedule3?.duration}
                        id={currentSchedule3?.lectureID}
                        show={cellStates[cellKey]}
                        onToggle={() => toggleCellState(cellKey)}
                        />
                    )}
                    {currentSchedule3 && <CRUDOnHoverLecture  id={currentSchedule3?.lectureID} show={cellStates[cellKey]}
                    onToggle={() => toggleCellState(cellKey)}/>}
                </td>
        );
    }

    return cells;
};
export const useScheduleCells4 = (day,suffix, one, two, three, four) => {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell

    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }

    const suffixes = suffix;
    const cells = [];
    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = halls[`${day.toLowerCase()}${one}${suffixes[i]}`];
        const currentSchedule2 = halls[`${day.toLowerCase()}${two}${suffixes[i]}`];
        const currentSchedule3 = halls[`${day.toLowerCase()}${three}${suffixes[i]}`];
        const currentSchedule4 = halls[`${day.toLowerCase()}${four}${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}${four}${suffixes[i]}`; // Unique key for each cell

        cells.push(
            currentSchedule?.duration >= 4 || currentSchedule2?.duration >= 3 || currentSchedule3?.duration >= 2 ? null :
                <td rowSpan={currentSchedule4?.duration} key={i} className="relative">
                    {!currentSchedule4 && (
                        <AddOnHover handle={() => toggleCellState(cellKey)} tr={cellStates[cellKey]}/>
                    )}
                    {cellStates[cellKey] && !currentSchedule4 && (
                        <AddInfoHalls 
                        cancel={() => toggleCellState(cellKey)} 
                        day={day.toLowerCase()}
                        start={four}
                        hallNumber={suffixes[i]}
                        />
                    )}
                    {currentSchedule4 && (
                        <FirstColumnCellHalls
                        doc={currentSchedule4?.professor}
                        subject={currentSchedule4?.course}
                        year={currentSchedule4?.year}
                        section={currentSchedule4?.department}
                        group={currentSchedule4?.groupNumber}
                        course={currentSchedule4?.course}
                        professor={currentSchedule4?.professor}
                        department={currentSchedule4?.department}
                        groupNumber={currentSchedule4?.groupNumber}
                        duration={currentSchedule4?.duration}
                        id={currentSchedule4?.lectureID}
                        show={cellStates[cellKey]}
                        onToggle={() => toggleCellState(cellKey)}
                        />
                    )} 
                    {currentSchedule4 && <CRUDOnHoverLecture  id={currentSchedule4?.lectureID} show={cellStates[cellKey]}
                    onToggle={() => toggleCellState(cellKey)}/>}
                </td>
        );
    }

    return cells;
};
