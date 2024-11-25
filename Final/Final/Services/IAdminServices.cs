using Final.Models;
using Final.ModelsForAdmin;

namespace Final.Services
{
    public interface IAdminServices
    {
        Task<bool> findLecturewithinRange(LectureDetails LectureToAdd);
        Task<Lecture> AddNewLecture(LectureDetails LectureToAdd);
       
        Task<List<ClassDetailsForLabs>> GetClassesDetails();
        Task<List<LectureDetailsforHalls>> GetLecturesDetails();

        Task<bool> findClasswithinRange(ClassDetails classToAdd);
        Task<Class> AddNewClass(ClassDetails classToAdd);


        Task<List<string>> GetCoursesNames();
        Task<List<string>> GetTaNames();
        Task<List<string>> GetProfessorsNames();
        Task<List<string>> GetDepartmentsNames();
        Task<List<int>> GetSectionNumbers();

        Task<bool> DeleteClass(DeleteClassOrLecture ClassId);
        Task<bool> DeleteLecture(DeleteClassOrLecture LectureId);

        Task<bool> UpdateClass(UpdateClassDetails ClassDetails);
        Task<bool> UpdateLecture(UpdateLectureDetails LectureDetails);
    }
}
