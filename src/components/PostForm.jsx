import { Formik, FieldArray, Form, Field } from 'formik';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function PostForm() {
    const { isLoggedIn } = useAuth();

    const handleSubmit = async (values) => {
        const url = "https://localhost:7150/api/Post/addpost";
        const authToken = localStorage.getItem('accessToken');

        const response = await axios.post(url, values, {
            headers: {
                'Authorization': "Bearer " + authToken,
                'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log('Succesvolle POST-aanvraag:', response.data);
            window.location.href = '/';
        }).catch(error => {
            console.error('Fout bij POST-aanvraag:', error);
        });

        console.log(response);
    };

    if (!isLoggedIn) {
        return (
            <div className="w-full max-w-lg m-auto p-4">
                <h1 className="text-xl font-semibold mb-4">U moet ingelogd zijn om een post te maken.</h1>
            </div>
        )
    } else {
        return (
            <div className="w-full max-w-lg m-auto p-4 bg-white border rounded-lg shadow-md">
                <h1 className="text-xl font-semibold mb-4">Add a Post</h1>
                <Formik
                    initialValues={{
                        workoutNaam: '',
                        Beschrijving: '',
                        SetsReps: [{
                            exercise: {
                                ExerciseName: '',
                            },
                            sets: '',
                            reps: '',
                        }],
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form data-cy="postform" className="space-y-4">
                        <div>
                            <label htmlFor="workoutNaam" className="block text-sm font-medium text-gray-700">
                                Naam van uw workout
                            </label>
                            <Field
                                type="text"
                                id="workoutNaam"
                                name="workoutNaam"
                                placeholder="Naam van uw workout"
                                className="w-full p-2 border rounded focus:outline-none"
                                data-cy="workoutnaam"
                            />
                        </div>
                        <div>
                            <label htmlFor="Beschrijving" className="block text-sm font-medium text-gray-700">
                                Nog tips?
                            </label>
                            <Field
                                as="textarea"
                                id="Beschrijving"
                                name="Beschrijving"
                                placeholder="Nog tips?"
                                className="w-full p-2 border rounded focus:outline-none"
                                data-cy="beschrijving"
                            />
                        </div>
                        <FieldArray name="SetsReps">
                            {({ push, remove, form }) => (
                                <div>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            push({
                                                exercise: { ExerciseName: '' },
                                                sets: '',
                                                reps: '',
                                            })
                                        }
                                        className="text-blue-600"
                                    >
                                        Add an exercise
                                    </button>
                                    {form.values.SetsReps.map((exercise, index) => (
                                        <div
                                            key={index}
                                            className="border p-2 rounded flex space-x-4 items-center"

                                        >
                                            <div className="flex-1">
                                                <label htmlFor={`SetsReps.${index}.exercise.ExerciseName`} className="block text-sm font-medium text-gray-700">
                                                    Naam van uw oefening
                                                </label>
                                                <Field
                                                    type="text"
                                                    id={`SetsReps.${index}.exercise.ExerciseName`}
                                                    name={`SetsReps.${index}.exercise.ExerciseName`}
                                                    placeholder="Naam van uw oefening"
                                                    className="w-full p-2 border rounded focus:outline-none"
                                                    data-cy="exercisename"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor={`SetsReps.${index}.sets`} className="block text-sm font-medium text-gray-700">
                                                    Aantal sets
                                                </label>
                                                <Field
                                                    type="text"
                                                    id={`SetsReps.${index}.sets`}
                                                    name={`SetsReps.${index}.sets`}
                                                    placeholder="Aantal sets"
                                                    className="w-16 p-2 border rounded focus:outline-none"
                                                    data-cy="sets"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor={`SetsReps.${index}.reps`} className="block text-sm font-medium text-gray-700">
                                                    Aantal reps
                                                </label>
                                                <Field
                                                    type="text"
                                                    id={`SetsReps.${index}.reps`}
                                                    name={`SetsReps.${index}.reps`}
                                                    placeholder="Aantal reps"
                                                    className="w-16 p-2 border rounded focus:outline-none"
                                                    data-cy="reps"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => remove(index)}
                                                className="text-red-600"
                                            >
                                                Remove exercise
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </FieldArray>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
                            data-cy="submit"
                        >
                            Submit
                        </button>
                    </Form>
                </Formik>
            </div>
        )
    }
}

export default PostForm;