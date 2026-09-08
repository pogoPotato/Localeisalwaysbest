import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function Toast({ toast }) {
  return (
    <div className="toast-slot">
      <AnimatePresence>
        {toast && (
          <motion.div
            className={"toast" + (toast.isError ? " error" : "")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            role="status"
          >
            {toast.isError ? <AlertTriangle size={15} /> : <CheckCircle2 size={15} />}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
