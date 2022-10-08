// To fetch the standards list from backend
export default async function StandardsList() {
    try {
        let year = new Date().getFullYear();
        let listOfStandards = await fetch(
            `http://localhost:5050/getMasterList/${sessionStorage.getItem(
                "schoolId"
            )}/${year}/standard`
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .catch((err) => console.error(err));
        if (!listOfStandards.message) {
            let listOfStandard = JSON.parse(listOfStandards);
            for (let i = 0; i < listOfStandard.length - 1; i++) {
                for (let j = 0; j < listOfStandard.length - 1 - i; j++) {
                    if (
                        listOfStandard[j].listValue >
                        listOfStandard[j + 1].listValue
                    ) {
                        let temp = listOfStandard[j + 1];
                        listOfStandard[j + 1] = listOfStandard[j];
                        listOfStandard[j] = temp;
                    }
                }
            }
            return listOfStandard;
        } else {
            return [];
        }
    } catch (err) {
        console.error(err.message);
        return [];
    }
}
