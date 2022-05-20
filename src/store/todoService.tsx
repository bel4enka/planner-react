import { TTodo, TTodoForm} from "../type/type";

const webApiUrl:string = "https://api.todoist.com/rest/v1";
const headers:{[key: string]: string} = {
  'Authorization': 'Bearer fbba7d8de3712acb44ce7b640b924f8dd721fa71',
  'Content-Type': 'application/json'
}
const projectId: number = 2291639505
export class ToDoService {

  getProjects = async () => {
    const options = {
      method: "GET",
      headers
    }
    const request = new Request(`${webApiUrl}/projects`, options);
    const response = await fetch(request);
    return response.json();
  }
  getTask = async () => {
    const options = {
      method: "GET",
      headers
    }
    const request = new Request(`${webApiUrl}/tasks?project_id=${projectId}`, options);
    const response = await fetch(request);
    return response.json();
  }
  deleteTask = async (id:string) => {
    const options = {
      method: "DELETE",
      headers,
    }
    const request = new Request(`${webApiUrl}/tasks/${id}`, options);
    return await fetch(request);
  }
  postTask = async (task: TTodoForm) => {
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(task)
    }
    const request = new Request(`${webApiUrl}/tasks?project_id=${projectId}`, options);
    return await fetch(request);
  }
  completeTask = async (id:string) => {
    const options = {
      method: "POST",
      headers,
    }
    const request = new Request(`${webApiUrl}/tasks/${id}/close`, options);
    return await fetch(request);
  }
  put = async (data:TTodo) => {
    const headers = new Headers()
    headers.append("Content-Type", "application/json");
    const options = {
      method: "PUT",
      headers,
      body: JSON.stringify(data)
    }
    const request = new Request(webApiUrl, options);
    return await fetch(request);
  }


}
