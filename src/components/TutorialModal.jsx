import { useTranslation } from "../i18n/LocaleContext";

export default function TutorialModal({ content, isOpen, onClose }) {
  const t = useTranslation();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="tutorial-modal-title">
      <div className="modal-card tutorial-modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <h3 id="tutorial-modal-title">{t("app.tutorialModalTitle")}</h3>
          <button type="button" className="secondary" onClick={onClose}>
            {t("app.close")}
          </button>
        </div>
        <div className="tutorial-body" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

