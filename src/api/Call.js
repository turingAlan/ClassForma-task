import axios from "axios";
import endpoints from "../constants/endpoint";

const GetWorkFlowList = async (setState) => {
  axios
    .get(endpoints.WorkflowList)
    .then(function (response) {
      setState(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetModules = async (page, limit, setState) => {
  axios
    .get(endpoints.modules, {
      params: {
        page: page,
        limit: limit,
      },
    })
    .then(function (response) {
      setState(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetUserData = async (id, setName, setInputType) => {
  console.log(id);
  axios
    .get(`${endpoints.WorkflowPage}/${id}`)
    .then(function (response) {
      setName(response.data.name);
      setInputType(response.data.input_type.toUpperCase());
    })
    .catch((error) => {
      console.log(error);
    });
};

export { GetWorkFlowList, GetModules, GetUserData };
