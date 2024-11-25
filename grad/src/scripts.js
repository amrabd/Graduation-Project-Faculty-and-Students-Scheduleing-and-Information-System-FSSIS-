import FifthColumnCell from "./Components/UserCells/FifthColumnCell/FifthColumnCell";
import FirstColumnCellUser from "./Components/UserCells/FirstColumnCell/FirstColumnCellUser";
import FourthColumnCell from "./Components/UserCells/FourthColumnCell/FourthColumnCell";
import SecondColumnCell from "./Components/UserCells/SecondColumnCell/SecondColumnCell";
import ThirdColumnCell from "./Components/UserCells/ThirdColumnCell/ThirdColumnCell";
const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday'];
const columnComponents = [FirstColumnCellUser, SecondColumnCell, ThirdColumnCell, FourthColumnCell, FifthColumnCell];

export const generateRow1 = (apps) => {
    const cells = [];
    for (let index = 0; index < daysOfWeek.length; index++) {
        const day = daysOfWeek[index];
        const CellComponent = columnComponents[index];

        const dayData = apps[`${day}${8}`]; // Adjust this depending on your data structure

        cells.push(
            <td key={index} rowSpan={dayData?.duration}>
                {dayData && (
                    <CellComponent
                        doc={dayData?.teachingStaffName}
                        subject={dayData?.courseName}
                        place={dayData?.location}
                        year={dayData?.year}
                        section={dayData?.section}
                        group={dayData?.groupNumber}
                        dep={dayData?.departmentName}
                    />
                )}
            </td>
        );
    }

    return cells;
};

export const generateRow2 = (apps) => {
    const cells = [];
    for (let index = 0; index < daysOfWeek.length; index++) {
        const day = daysOfWeek[index];
        const CellComponent = columnComponents[index];

        const dayData1 = apps[`${day}${8}`]; // Adjust this depending on your data structure
        const dayData2 = apps[`${day}${9}`];

        cells.push(
            dayData1?.duration >= 2 ? null :
                <td key={index} rowSpan={dayData2?.duration}>
                    {dayData2 && (
                        <CellComponent
                            doc={dayData2?.teachingStaffName}
                            subject={dayData2?.courseName}
                            place={dayData2?.location}
                            year={dayData2?.year}
                            section={dayData2?.section}
                            group={dayData2?.groupNumber}
                            dep={dayData2?.departmentName}
                        />
                    )}
                </td>
        );
    }

    return cells;
};
export const generateRow3 = (apps) => {
    const cells = [];
    for (let index = 0; index < daysOfWeek.length; index++) {
        const day = daysOfWeek[index];
        const CellComponent = columnComponents[index];

        const dayData1 = apps[`${day}${8}`]; // Adjust this depending on your data structure
        const dayData2 = apps[`${day}${9}`];
        const dayData3 = apps[`${day}${10}`];

        cells.push(
            dayData1?.duration >= 3 || dayData2?.duration >= 2 ? null :
                <td key={index} rowSpan={dayData3?.duration}>
                    {dayData3 && (
                        <CellComponent
                            doc={dayData3?.teachingStaffName}
                            subject={dayData3?.courseName}
                            place={dayData3?.location}
                            year={dayData3?.year}
                            section={dayData3?.section}
                            group={dayData3?.groupNumber}
                            dep={dayData3?.departmentName}
                        />
                    )}
                </td>
        );
    }

    return cells;
};
export const generateRow4 = (apps, one, two, three, four) => {

    const cells = [];
    for (let index = 0; index < daysOfWeek.length; index++) {
        const day = daysOfWeek[index];
        const CellComponent = columnComponents[index];

        const dayData1 = apps[`${day}${one}`]; // Adjust this depending on your data structure
        const dayData2 = apps[`${day}${two}`];
        const dayData3 = apps[`${day}${three}`];
        const dayData4 = apps[`${day}${four}`];


        cells.push(
            dayData1?.duration >= 4 || dayData2?.duration >= 3 || dayData3?.duration >= 2 ? null :
                <td key={index} rowSpan={dayData4?.duration}>
                    {dayData4 && (
                        <CellComponent
                            doc={dayData4?.teachingStaffName}
                            subject={dayData4?.courseName}
                            place={dayData4?.location}
                            year={dayData4?.year}
                            section={dayData4?.section}
                            group={dayData4?.groupNumber}
                            dep={dayData4?.departmentName}
                        />
                    )}
                </td>
        );
    }

    return cells;
};


