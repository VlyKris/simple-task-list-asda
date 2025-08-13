import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { useQuery } from "convex/react";
import { useState } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const todos = useQuery(api.todos.getTodos);
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");
  const [priorityFilter, setPriorityFilter] = useState<"all" | "low" | "medium" | "high">("all");

  if (todos === undefined) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-4 border rounded-lg animate-pulse">
            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-muted rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  const filteredTodos = todos.filter((todo: Doc<"todos">) => {
    if (filter === "pending" && todo.completed) return false;
    if (filter === "completed" && !todo.completed) return false;
    if (priorityFilter !== "all" && todo.priority !== priorityFilter) return false;
    return true;
  });

  if (todos.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-lg font-medium mb-2">No todos yet</h3>
        <p className="text-muted-foreground">
          Create your first todo to get started!
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <span className="text-sm font-medium">Filters:</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={filter} onValueChange={(value: "all" | "pending" | "completed") => setFilter(value)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Todos</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={priorityFilter} onValueChange={(value: "all" | "low" | "medium" | "high") => setPriorityFilter(value)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="high">High Priority</SelectItem>
              <SelectItem value="medium">Medium Priority</SelectItem>
              <SelectItem value="low">Low Priority</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredTodos.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8"
        >
          <p className="text-muted-foreground">
            No todos match your current filters.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setFilter("all");
              setPriorityFilter("all");
            }}
            className="mt-2"
          >
            Clear Filters
          </Button>
        </motion.div>
      ) : (
        <div className="space-y-3">
          {filteredTodos.map((todo: Doc<"todos">) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}
