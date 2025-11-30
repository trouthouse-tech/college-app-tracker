'use client';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { CollegeBuilderActions } from '../../store/builders';
import { CurrentCollegeActions } from '../../store/current';
import { saveCollegeThunk } from '../../store/thunks';
import { formatPhoneNumber, parsePhoneNumber } from '../../utils';

export const CollegeModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.collegeBuilder.isModalOpen);
  const currentCollege = useAppSelector((state) => state.currentCollege);

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(CollegeBuilderActions.closeModal());
    dispatch(CurrentCollegeActions.reset());
  };

  const handleSave = () => {
    if (!currentCollege.name) {
      alert('Please enter a college name');
      return;
    }

    const collegeToSave = {
      ...currentCollege,
      id: currentCollege.id || crypto.randomUUID(),
    };

    dispatch(saveCollegeThunk(collegeToSave));
    handleClose();
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Add College</h2>
          <button onClick={handleClose} className={styles.closeButton}>
            ✕
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.field}>
            <label className={styles.label}>Name</label>
            <input
              type="text"
              value={currentCollege.name}
              onChange={(e) => dispatch(CurrentCollegeActions.setName(e.target.value))}
              placeholder="Stanford University"
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Address</label>
            <input
              type="text"
              value={currentCollege.address}
              onChange={(e) => dispatch(CurrentCollegeActions.setAddress(e.target.value))}
              placeholder="450 Serra Mall, Stanford, CA 94305"
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Phone Number</label>
            <input
              type="tel"
              value={formatPhoneNumber(currentCollege.phoneNumber || '')}
              onChange={(e) => dispatch(CurrentCollegeActions.setPhoneNumber(parsePhoneNumber(e.target.value)))}
              placeholder="(650) 723-2300"
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Motto</label>
            <input
              type="text"
              value={currentCollege.motto}
              onChange={(e) => dispatch(CurrentCollegeActions.setMotto(e.target.value))}
              placeholder="The wind of freedom blows"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.footer}>
          <button onClick={handleClose} className={styles.cancelButton}>
            Cancel
          </button>
          <button onClick={handleSave} className={styles.saveButton}>
            Add College
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
    bg-white border border-gray-200 rounded-lg w-full max-w-md 
    shadow-lg flex flex-col max-h-[90vh]
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
    flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4
  `,
  field: `
    flex flex-col gap-1.5
  `,
  label: `
    text-xs font-medium text-gray-500 tracking-wide uppercase
  `,
  input: `
    w-full px-3 py-2 bg-white border border-gray-300 rounded-md
    text-sm text-gray-900 placeholder-gray-400
    focus:outline-none focus:ring-1 focus:ring-[#FF7C1E] focus:border-[#FF7C1E]
    transition-all
  `,
  footer: `
    flex gap-2 px-4 py-3 border-t border-gray-100
  `,
  cancelButton: `
    flex-1 py-2 bg-gray-100 text-sm text-gray-700 font-medium rounded-md
    hover:bg-gray-200 transition-colors cursor-pointer
  `,
  saveButton: `
    flex-1 py-2 bg-[#FF7C1E] text-sm text-white font-medium rounded-md
    hover:bg-[#DE6521] transition-colors cursor-pointer
  `,
};
