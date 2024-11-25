import { useState } from "react";
import AddInfoLabs from "../AddInfo/AddInfoLabs";
import AddOnHover from "../AddOnHover/AddOnHover";
import CRUDOnHoverClass from "../CRUDOnHover/CRUDOnHoverClass";
import { labs as cellData} from "./generateLabs";
import FirstColumnCellLabs from "../UserCells/FirstColumnCell/FirstColumnCellLabs";
console.log(cellData);

export function useScheduleCells(day, labs) {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell
    const [data, setData] = useState(cellData);
    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }
    const suffixes = labs;
    const cells = [];
    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = cellData[`${day.toLowerCase()}8${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}8${suffixes[i]}`; // Unique key for each cell

        cells.push(
            <td rowSpan={currentSchedule?.duration} key={i} className="relative">
                {!currentSchedule && (
                    <AddOnHover handle={() => toggleCellState(cellKey)} tr={cellStates[cellKey]}/>
                )}
                {cellStates[cellKey] && !currentSchedule? <AddInfoLabs 
                        cancel={() => toggleCellState(cellKey)} 
                        day={day.toLowerCase()}
                        start={8}
                        labNumber={suffixes[i]}
                        />
                        :null}
                {currentSchedule && (
                    <FirstColumnCellLabs
                        doc={currentSchedule?.ta}
                        subject={currentSchedule?.course}
                        place={currentSchedule?.department}
                        year={currentSchedule?.year}
                        section={currentSchedule?.section}
                        duration={currentSchedule?.duration}
                        group={currentSchedule?.groupNumber}
                        dep={currentSchedule?.department}
                        show={cellStates[cellKey]}
                        onToggle={() => toggleCellState(cellKey)}
                        id={currentSchedule?.classId}
                    />
                )}
                {currentSchedule && <CRUDOnHoverClass id={currentSchedule?.classId} show={cellStates[cellKey]}
                    onToggle={() => toggleCellState(cellKey)}/>}
            </td>
        );
    }

    return cells;
}
export const useScheduleCells2 = (day, labs) => {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell

    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }

    const suffixes = labs;
    const cells = [];

    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = cellData[`${day.toLowerCase()}8${suffixes[i]}`];
        const currentSchedule2 = cellData[`${day.toLowerCase()}9${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}9${suffixes[i]}`; // Unique key for each cell

        cells.push(
            currentSchedule?.duration >= 2 ? null :
                <td rowSpan={currentSchedule2?.duration} key={i} className="relative">
                    {!currentSchedule2 && (
                        <AddOnHover handle={() => toggleCellState(cellKey)} tr={cellStates[cellKey]}/>
                    )}
                    {cellStates[cellKey] && !currentSchedule2 && (
                        <AddInfoLabs 
                        cancel={() => toggleCellState(cellKey)} 
                        day={day.toLowerCase()}
                        start={9}
                        labNumber={suffixes[i]}
                        />
                    )}
                    {currentSchedule2 && (
                        <FirstColumnCellLabs
                        doc={currentSchedule2?.ta}
                        subject={currentSchedule2?.course}
                        place={currentSchedule2?.department}
                        year={currentSchedule2?.year}
                        section={currentSchedule2?.section}
                        duration={currentSchedule2?.duration}
                        group={currentSchedule2?.groupNumber}
                        dep={currentSchedule2?.department}
                        show={cellStates[cellKey]}
                        onToggle={() => toggleCellState(cellKey)}
                        id={currentSchedule2?.classId}
                        />
                    )}
                    {currentSchedule2 && <CRUDOnHoverClass  id={currentSchedule2?.classId} show={cellStates[cellKey]}
                    onToggle={() => toggleCellState(cellKey)} />}
                </td>
        );
    }

    return cells;
};
export const useScheduleCells3 = (day,  labs) => {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell

    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }

    const suffixes = labs;
    const cells = [];

    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = cellData[`${day.toLowerCase()}8${suffixes[i]}`];
        const currentSchedule2 = cellData[`${day.toLowerCase()}9${suffixes[i]}`];
        const currentSchedule3 = cellData[`${day.toLowerCase()}10${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}10${suffixes[i]}`; // Unique key for each cell

        cells.push(
            currentSchedule?.duration >= 3 || currentSchedule2?.duration >= 2 ? null :
                <td rowSpan={currentSchedule3?.duration} key={i} className="relative">
                    {!currentSchedule3 && (
                        <AddOnHover handle={() => toggleCellState(cellKey)} tr={cellStates[cellKey]}/>
                    )}
                    {cellStates[cellKey] && !currentSchedule3 && (
                        <AddInfoLabs 
                        cancel={() => toggleCellState(cellKey)} 
                        day={day.toLowerCase()}
                        start={10}
                        labNumber={suffixes[i]}
                        />
                    )}
                    {currentSchedule3 && (
                        <FirstColumnCellLabs
                        doc={currentSchedule3?.ta}
                        subject={currentSchedule3?.course}
                        place={currentSchedule3?.department}
                        year={currentSchedule3?.year}
                        section={currentSchedule3?.section}
                        duration={currentSchedule3?.duration}
                        group={currentSchedule3?.groupNumber}
                        dep={currentSchedule3?.department}
                        show={cellStates[cellKey]}
                        onToggle={() => toggleCellState(cellKey)}
                        id={currentSchedule3?.classId}
                        />
                    )}
                    {currentSchedule3 && <CRUDOnHoverClass  id={currentSchedule3?.classId}  show={cellStates[cellKey]}
                    onToggle={() => toggleCellState(cellKey)}/>}
                </td>
        );
    }

    return cells;
};
export const useScheduleCells4 = (day,  labs, one, two, three, four) => {
    const [cellStates, setCellStates] = useState({}); // State to track the open/close state of each cell

    function toggleCellState(cellKey) {
        setCellStates(prevStates => ({
            ...prevStates,
            [cellKey]: !prevStates[cellKey] // Toggle the state of the clicked cell
        }));
    }

    const suffixes = labs;
    const cells = [];

    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = cellData[`${day.toLowerCase()}${one}${suffixes[i]}`];
        const currentSchedule2 = cellData[`${day.toLowerCase()}${two}${suffixes[i]}`];
        const currentSchedule3 = cellData[`${day.toLowerCase()}${three}${suffixes[i]}`];
        const currentSchedule4 = cellData[`${day.toLowerCase()}${four}${suffixes[i]}`];
        const cellKey = `${day.toLowerCase()}${four}${suffixes[i]}`; // Unique key for each cell

        cells.push(
            currentSchedule?.duration >= 4 || currentSchedule2?.duration >= 3 || currentSchedule3?.duration >= 2 ? null :
                <td rowSpan={currentSchedule4?.duration} key={i} className="relative">
                    {!currentSchedule4 && (
                        <AddOnHover handle={() => toggleCellState(cellKey)} tr={cellStates[cellKey]}/>
                    )}
                    {cellStates[cellKey] && !currentSchedule4 && (
                        <AddInfoLabs 
                        cancel={() => toggleCellState(cellKey)} 
                        day={day.toLowerCase()}
                        start={four}
                        labNumber={suffixes[i]}
                        />
                    )}
                    {currentSchedule4 && (
                        <FirstColumnCellLabs
                        doc={currentSchedule4?.ta}
                        subject={currentSchedule4?.course}
                        place={currentSchedule4?.department}
                        year={currentSchedule4?.year}
                        section={currentSchedule4?.section}
                        duration={currentSchedule4?.duration}
                        group={currentSchedule4?.groupNumber}
                        dep={currentSchedule4?.department}
                        show={cellStates[cellKey]}
                        onToggle={() => toggleCellState(cellKey)}
                        id={currentSchedule4?.classId}
                        />
                    )}
                    {currentSchedule4 && <CRUDOnHoverClass id={currentSchedule4?.classId}  show={cellStates[cellKey]}
                    onToggle={() => toggleCellState(cellKey)}/>}
                </td>
        );
    }

    return cells;
};
