const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const loginUser = async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
};

export const displayComponent1 = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/sample_assignment_api_1`, {
        method: "GET",
        headers: new Headers({
            "Authorization": `Basic ${btoa(`trial:assignment123`)}`,
            "Content-Type": 'application/json'
        })
    });
    //console.log('displayComponent1', response);
    return response.json();
}

export const displayComponent3 = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/sample_assignment_api_3`, {
        method: "GET",
        headers: new Headers({
            "Authorization": `Basic ${btoa(`trial:assignment123`)}`,
            "Content-Type": 'application/json'
        })
    });
    //console.log('displayComponent3', response);
    return response.json();
}

export const displayComponent4 = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/sample_assignment_api_4`, {
        method: "GET",
        headers: new Headers({
            "Authorization": `Basic ${btoa(`trial:assignment123`)}`,
            "Content-Type": 'application/json'
        })
    });
    //console.log('displayComponent4', response);
    return response.json();
}

export const displayComponent5 = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/sample_assignment_api_5`, {
        method: "GET",
        headers: new Headers({
            "Authorization": `Basic ${btoa(`trial:assignment123`)}`,
            "Content-Type": 'application/json'
        })
    });
    //console.log('displayComponent5', response);
    return response.json();
}