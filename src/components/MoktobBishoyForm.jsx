"use client";
import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { initialFormData, validationSchema } from "@/app/data/MoktobBishoyData";

const MoktobBishoyForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div className="w-full mx-auto mt-8 rounded bg-white p-10 shadow-lg">
      <h2 className="mb-6 text-2xl">মক্তব বিষয়</h2>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="mb-2 block text-gray-700">
                এক মাসে নতুন মক্তব চালু হয়েছে
              </label>
              <Field
                name="MoktobChalu"
                placeholder="Enter value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="MoktobChalu"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে
              </label>
              <Field
                name="MoktobAdmit"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />

              <ErrorMessage
                name="MoktobAdmit"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="mb-2 block text-gray-700">
                নতুন পুরাতন মোট মক্তব চালু আছে
              </label>
              <Field
                name="NewMoktob"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="NewMoktob"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                এই মাসে বয়স্ক কোরআন শিক্ষা চালু হয়েছে
              </label>
              <Field
                name="Sikkha"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />

              <ErrorMessage
                name="Sikkha"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="mb-2 block text-gray-700">
                মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা
              </label>
              <Field
                name="TotalStudent"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="TotalStudent"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                নতুন পুরাতন মোট বয়স্ক কোরআন চালু আছে
              </label>
              <Field
                name="TotalSikkha"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />

              <ErrorMessage
                name="TotalSikkha"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="mb-2 block text-gray-700">
                মক্তবের অভিভাবক সম্মেলন হয়েছে
              </label>
              <Field
                name="GurdianMeeting"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="GurdianMeeting"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে
              </label>
              <Field
                name="TotalAgeSikkha"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />

              <ErrorMessage
                name="TotalAgeSikkha"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="mb-2 block text-gray-700">
                মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে
              </label>
              <Field
                name="MadrasahAdmit"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="MadrasahAdmit"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে
              </label>
              <Field
                name="NewMuslim"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />

              <ErrorMessage
                name="NewMuslim"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="secondary" size="default" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MoktobBishoyForm;
