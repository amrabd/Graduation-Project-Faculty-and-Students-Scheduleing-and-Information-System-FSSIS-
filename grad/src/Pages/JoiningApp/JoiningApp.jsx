import './joiningapp.css'

const JoiningApp = () => {
    return (
        <div className={` bg-white p-6 rounded-md shadow-md w-[90vw] mx-auto bd`}>
            <h2 className="text-4xl font-bold mb-4  text-[#0059D5]  text-center">طلب إلتحاق</h2>
            <h2 className="text-3xl font-semibold mb-4  text-[#0060E4] text-center">بيانات الطالب الشخصية</h2>
            <form action="#" method="post" className='w-[90vw]'>
                <div className="mb-4 pr-8">
                    <fieldset className="w-3/5 border-2 rounded-md border-[#0060E4]  focus:border-[#0060E4]">
                        <legend className="l text-[#0060E4]">الإسم كامل</legend>
                        <input type="text" placeholder="ادخل اسمك رباعي" className="pb-2 text-[#BBBBBB] border-none  shadow-none" />
                    </fieldset>
                </div>


                <div className="mb-4 flex justify-between">
                    <fieldset className="w-1/4 h-auto border-2 rounded-md  border-[#0060E4] mr-8">
                        <legend className="l text-[#0060E4]">الجنسية</legend>
                        <input type="text" placeholder="ادخل الجنسية" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>

                    <fieldset className="ml-52 w-1/4 h-auto border-2 rounded-md border-[#0060E4]">
                        <legend className="l text-[#0060E4]">الديانة</legend>
                        <input type="text" placeholder="ادخل الديانة" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>
                </div>

                <div className="mb-4 pr-8">
                    <fieldset className="w-4/6 border-2 rounded-md border-[#0060E4] focus:border-[#0060E4]">
                        <legend className="l text-[#0060E4]">محل الإقامة</legend>
                        <input type="text" placeholder="ادخل عنوانك بالتفصيل" className="pb-2  text-[#BBBBBB] border-none  shadow-none" />
                    </fieldset>
                </div>

                <div className="mb-4 flex justify-between">
                    <fieldset className="w-1/4 h-auto border-2 rounded-md  border-[#0060E4] mr-8">
                        <legend className="l text-[#0060E4]">رقم التليفون</legend>
                        <input type="text" placeholder="ادخل رقم التليفون المنزل" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>

                    <fieldset className="ml-52 w-1/4 h-auto border-2 rounded-md border-[#0060E4]">
                        <legend className="l text-[#0060E4]">رقم المحمول</legend>
                        <input type="text" placeholder="ادخل رقم المحمول" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>
                </div>

                <div className="mb-4 flex justify-between">
                    <fieldset className="w-1/4 h-auto border-2 rounded-md  border-[#0060E4] mr-8">
                        <legend className="l text-[#0060E4]">تاريخ الميلاد</legend>
                        <input type="date" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>

                    <fieldset className="ml-52 w-1/4 h-auto border-2 rounded-md border-[#0060E4]">
                        <legend className="l text-[#0060E4]">جهة الميلاد</legend>
                        <input type="text" placeholder="ادخل اسم مكان الميلاد" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>
                </div>


                <div className="mb-4 flex justify-between">
                    <fieldset className="w-1/4 h-auto border-2 rounded-md  border-[#0060E4] mr-8">
                        <legend className="l text-[#0060E4]">سن الطالب</legend>
                        <input type="text" placeholder="في اول اكتوبر .. سنه 20" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>

                    <fieldset className="ml-52 w-1/4 h-12 border-2 rounded-md border-[#0060E4]">
                        <input type="text" placeholder=" يوم/شهر//سنة" className=" pb-2 pt-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>
                </div>


                <div className="mb-4 flex justify-between">
                    <fieldset className="w-1/4 h-auto border-2 rounded-md  border-[#0060E4] mr-8">
                        <legend className="l text-[#0060E4] ml-10">رقم البطاقة</legend>
                        <input type="number" placeholder="ادخل الرقم القومي" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>

                    <fieldset className="ml-52 w-1/4 h-auto border-2 rounded-md border-[#0060E4]">
                        <legend className="l text-[#0060E4] ">جهة الإصدار</legend>
                        <input type="text" placeholder="ادخل اسم جهة اصدار البطاقة" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>
                </div>



                <div className="mb-4 flex justify-between">
                    <fieldset className="w-1/4 h-auto border-2 rounded-md  border-[#0060E4] mr-8">
                        <legend className="l text-[#0060E4] ml-20">المركز / القسم</legend>
                        <input type="number" placeholder="ادخل الرقم القومي" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>

                    <fieldset className="ml-52 w-1/4 h-auto border-2 rounded-md border-[#0060E4]">
                        <legend className="l text-[#0060E4]">تاريخ الإصدار </legend>
                        <input type="text" placeholder="ادخل تاريخ اصدار البطاقة" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>
                </div>


                <div className="mb-4 pr-8">
                    <fieldset className="w-4/6 border-2 rounded-md border-[#0060E4] focus:border-[#0060E4]">
                        <legend className="l text-[#0060E4]">رقم بطاقة الخدمة الوطنية و العسكرية</legend>
                        <input type="number" placeholder="ادخل رقم بطاقة الخدمة الوطنية و العسكرية" className="pb-2  text-[#BBBBBB] border-none  shadow-none" />
                    </fieldset>
                </div>


                <div className="mb-4 pr-8">
                    <fieldset className="w-4/6 border-2 rounded-md border-[#0060E4] focus:border-[#0060E4]">
                        <legend className="l text-[#0060E4]">الشهادة الدراسية الحاصل عليها</legend>
                        <input type="text" placeholder="ادخل الشهادة الدراسية الحاصل عليها" className="pb-2  text-[#BBBBBB] border-none  shadow-none" />
                    </fieldset>
                </div>

                <div className="mb-4 flex justify-between">
                    <fieldset className="w-1/4 h-auto border-2 rounded-md  border-[#0060E4] mr-8">
                        <legend className="l text-[#0060E4]">سنة التخرج</legend>
                        <input type="number" placeholder="ادخل سنة التخرج من الثانوية العامة" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>

                    <fieldset className="ml-52 w-1/4 h-auto border-2 rounded-md border-[#0060E4]">
                        <legend className="l text-[#0060E4]">المجموع</legend>
                        <input type="number" placeholder="ادخل المجوع الكلي للدرجات" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>
                </div>


                <div className="mb-4 flex justify-between  ">
                    <fieldset className="w-1/4 h-auto border-2 rounded-md  border-[#0060E4] mr-8">
                        <legend className="l text-[#0060E4] " > الشعبة</legend>
                        <input type="text" placeholder="رياضة / علوم" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>

                    <fieldset className="ml-52 w-1/4 h-auto border-2 rounded-md border-[#0060E4]">
                        <legend className="l text-[#0060E4]">تاريخ الإصدار </legend>
                        <input type="number" placeholder="ادخل رقم الجلوس في الثانوية العامة" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>
                </div>

                <h3 className="text-[#0060E4] text-center font-bold text-3xl ml-44 my-10">للغات الأجنبية التي درستها في القانوية العامة</h3>


                <div className="mb-4 flex justify-between">
                    <fieldset className="w-1/4 h-auto border-2 rounded-md  border-[#0060E4] mr-8">
                        <legend className="l text-[#0060E4]">لغة أولي</legend>
                        <input type="number" placeholder="ادخل اللغة الأجنبية الاولي" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>

                    <fieldset className="ml-52 w-1/4 h-auto border-2 rounded-md border-[#0060E4]">
                        <legend className="l text-[#0060E4]">لغة ثانية</legend>
                        <input type="number" placeholder="ادخل لغة الأجنبية الثاني" className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>
                </div>


                <div className="mb-4 pr-8">
                    <fieldset className="w-4/6 border-2 rounded-md border-[#0060E4] focus:border-[#0060E4]">
                        <legend className="l text-[#0060E4]">المدرسة الحاصل منها علي الثانوية العامة</legend>
                        <input type="text" placeholder="ادخل اسم المدرسة الثانوية" className="pb-2  text-[#BBBBBB] border-none  shadow-none" />
                    </fieldset>
                </div>

                <div className="mb-4 flex justify-between">
                    <fieldset className="w-1/4 h-auto border-2 rounded-md  border-[#0060E4] mr-8">
                        <legend className="l text-[#0060E4]">المنطقة التعليمية</legend>
                        <input type="number" placeholder="   ادخل المنطقة التعليمية التابع لها  " className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>

                    <fieldset className="ml-52 w-1/4 h-auto border-2 rounded-md border-[#0060E4]">
                        <legend className="l text-[#0060E4]">المحافظة</legend>
                        <input type="number" placeholder="ادخل   المحافظة التابع لها " className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>
                </div>

                <h3 className="text-[#0060E4] text-center font-bold text-3xl ml-44 my-10">بيانات ولي أمر الطالب الشخصية</h3>

                <div className="mb-4 flex justify-between">
                    <fieldset className="w-1/4 h-auto border-2 rounded-md  border-[#0060E4] mr-8">
                        <legend className="l text-[#0060E4]">اسم ولي أمر الطالب</legend>
                        <input type="number" placeholder="   ادخل الاسم رباعي  " className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>

                    <fieldset className="ml-52 w-1/4 h-auto border-2 rounded-md border-[#0060E4]">
                        <legend className="l text-[#0060E4]">رقم التليفون</legend>
                        <input type="number" placeholder="ادخل رقم التليفون " className="pb-2 border rounded-md focus:outline-none focus:border-[#0060E4]" />
                    </fieldset>
                </div>

                <div className="mb-4 pr-8">
                    <fieldset className="w-4/6 border-2 rounded-md border-[#0060E4] focus:border-[#0060E4]">
                        <legend className="l text-[#0060E4]">محل الإقامة</legend>
                        <input type="text" placeholder="ادخل عنوانك بالتفصيل" className="pb-2  text-[#BBBBBB] border-none  shadow-none" />
                    </fieldset>
                </div>


                <div className="mb-4 pr-8">
                    <fieldset className="w-3/5 border-2 rounded-md border-[#0060E4]  focus:border-[#0060E4]">
                        <legend className="l text-[#0060E4]">المهنة </legend>
                        <input type="text" placeholder="ادخل  المسمي الوظيفي" className="pb-2 text-[#BBBBBB] border-none  shadow-none" />
                    </fieldset>
                </div>

                <div className="flex justify-between">
                    <p className="text-[#0060E4] font-semibold mr-12 text-xl ">تحريرا في:   /    /   202م </p>
                    <p className="text-[#0060E4] font-semibold ml-56 text-xl"> اسم الطالب :</p>

                </div>



                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500   w-32 text-center   text-white px-4 py-2 rounded-md text-xl hover:bg-blue-600 focus:outline-none ">إرسال</button>
                </div>
            </form>
        </div>
    )
}

export default JoiningApp