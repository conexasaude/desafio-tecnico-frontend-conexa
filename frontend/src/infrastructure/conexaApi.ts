import axios from 'axios';
import { conexaApiDomain } from 'utils/constants';

const makeHeader = (token: string) => ({
  headers: { authorization: `Bearer ${token}` },
});

export interface DoctorLoginRequest {
  email: string;
  password: string;
}
export interface DoctorLoginResponse {
  name: string;
  token: string;
}

export const doctorLogin = ({
  email,
  password,
}: DoctorLoginRequest): Promise<DoctorLoginResponse> =>
  axios
    .post(`${conexaApiDomain}/login`, { email, password })
    .then((r) => r.data);

export interface Consultation {
  id: number;
  date: string;
  patient: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export const fetchConsultationList = (token: string): Promise<Consultation[]> =>
  axios
    .get(`${conexaApiDomain}/consultations?_expand=patient`, {
      ...makeHeader(token),
    })
    .then((r) => {
      return (
        r.data?.map(
          ({
            patient: {
              first_name: firstName,
              last_name: lastName,
              ...restPatient
            },
            ...restResponse
          }: {
            date: string;
            first_name: string;
            last_name: string;
            patient: {
              first_name: string;
              last_name: string;
            };
          }) => ({
            ...restResponse,
            patient: {
              ...restPatient,
              firstName,
              lastName,
            },
          })
        ) || []
      );
    });

export interface CreatePatientRequest {
  firstName: string;
  lastName: string;
  email: string;
}

export const createPatient = (
  { firstName, lastName, email }: CreatePatientRequest,
  token: string
) =>
  axios
    .post(
      `${conexaApiDomain}/patients`,
      { first_name: firstName, last_name: lastName, email },
      { ...makeHeader(token) }
    )
    .then((r) => r.data);

export interface CreateConsultationRequest {
  patientId: number;
  date: string;
}

export const createConsultation = (
  { patientId, date }: CreateConsultationRequest,
  token: string
) =>
  axios
    .post(
      `${conexaApiDomain}/consultations`,
      { patientId, date },
      { ...makeHeader(token) }
    )
    .then((r) => r.data);

export interface CreatePatientAndConsultationRequest
  extends CreatePatientRequest,
    Omit<CreateConsultationRequest, 'patientId'> {}

export const createPatientAndConsultation = async (
  { firstName, lastName, email, date }: CreatePatientAndConsultationRequest,
  token: string
) => {
  const { id: patientId } = await createPatient(
    { firstName, lastName, email },
    token
  );
  return createConsultation({ patientId, date }, token);
};
