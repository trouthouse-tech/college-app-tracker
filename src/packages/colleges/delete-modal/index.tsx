'use client';

import { useAppSelector, useAppDispatch } from '@/store';
import { CollegeBuilderActions } from '@/store/builders';
import { deleteCollegeThunk } from '@/store/thunks';

export const DeleteCollegeModal = () => {
  const dispatch = useAppDispatch();
  const deletingCollegeId = useAppSelector((state) => state.collegeBuilder.deletingCollegeId);
  const college = useAppSelector((state) => 
    deletingCollegeId ? state.colleges[deletingCollegeId] : null
  );

  if (!deletingCollegeId || !college) return null;

  const handleClose = () => {
    dispatch(CollegeBuilderActions.setDeletingCollegeId(null));
  };

  const handleConfirmDelete = () => {
    dispatch(deleteCollegeThunk(deletingCollegeId));
    handleClose();
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Delete College</h2>
          <button onClick={handleClose} className={styles.closeButton}>
            ✕
          </button>
        </div>

        <div className={styles.body}>
          <p className={styles.message}>
            Are you sure you want to delete <strong>{college.name}</strong>?
          </p>
          <p className={styles.warning}>
            This action cannot be undone.
          </p>
        </div>

        <div className={styles.footer}>
          <button onClick={handleClose} className={styles.cancelButton}>
            Cancel
          </button>
          <button onClick={handleConfirmDelete} className={styles.deleteButton}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: `
    fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50
  `,
  modal: `
    bg-white border border-gray-200 rounded-lg w-full max-w-sm 
    shadow-lg flex flex-col
  `,
  header: `
    flex items-center justify-between px-4 py-3 border-b border-gray-200
  `,
  title: `
    text-base font-semibold text-gray-900
  `,
  closeButton: `
    w-7 h-7 flex items-center justify-center text-gray-400 
    hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors cursor-pointer
  `,
  body: `
    px-4 py-4
  `,
  message: `
    text-sm text-gray-700
  `,
  warning: `
    text-gray-500 text-xs mt-2
  `,
  footer: `
    flex gap-2 px-4 py-3 border-t border-gray-100
  `,
  cancelButton: `
    flex-1 py-2 bg-gray-100 text-sm text-gray-700 font-medium rounded-md
    hover:bg-gray-200 transition-colors cursor-pointer
  `,
  deleteButton: `
    flex-1 py-2 bg-red-500 text-sm text-white font-medium rounded-md
    hover:bg-red-600 transition-colors cursor-pointer
  `,
};
