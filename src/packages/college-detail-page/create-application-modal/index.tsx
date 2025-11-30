'use client';

import { useAppSelector, useAppDispatch } from '@/store';
import { CollegeApplicationBuilderActions } from '@/store/builders';
import { createCollegeApplicationThunk } from '@/store/thunks';

export const CreateApplicationModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.collegeApplicationBuilder.isModalOpen);
  const collegeId = useAppSelector((state) => state.currentCollege.id);
  const collegeName = useAppSelector((state) => state.currentCollege.name);

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(CollegeApplicationBuilderActions.closeModal());
  };

  const handleCreate = () => {
    dispatch(createCollegeApplicationThunk(collegeId));
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Create Application</h2>
          <button onClick={handleClose} className={styles.closeButton}>
            ✕
          </button>
        </div>

        <div className={styles.body}>
          <p className={styles.message}>
            Create a new application for <strong>{collegeName}</strong>?
          </p>
        </div>

        <div className={styles.footer}>
          <button onClick={handleClose} className={styles.cancelButton}>
            Cancel
          </button>
          <button onClick={handleCreate} className={styles.createButton}>
            Create Application
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
  footer: `
    flex gap-2 px-4 py-3 border-t border-gray-100
  `,
  cancelButton: `
    flex-1 py-2 bg-gray-100 text-sm text-gray-700 font-medium rounded-md
    hover:bg-gray-200 transition-colors cursor-pointer
  `,
  createButton: `
    flex-1 py-2 bg-[#FF7C1E] text-sm text-white font-medium rounded-md
    hover:bg-[#DE6521] transition-colors cursor-pointer
  `,
};
