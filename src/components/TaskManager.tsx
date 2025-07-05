
import { useState, useRef, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Button } from './Button';
import { Card, CardContent, CardHeader } from './Card';
import { Plus, Trash2, Check, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

type FilterType = 'all' | 'active' | 'completed';

export const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [filter, setFilter] = useState<FilterType>('all');
  const [newTask, setNewTask] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date()
      };
      setTasks(prev => [task, ...prev]);
      setNewTask('');
      inputRef.current?.focus();
    }
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const taskStats = {
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Task Manager</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">Stay organized and get things done</p>
      </div>

      {/* Add Task */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <input
              ref={inputRef}
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
            />
            <Button
              onClick={addTask}
              className="px-6 flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Task
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <span>Total: <span className="font-semibold text-gray-900 dark:text-white">{taskStats.total}</span></span>
          <span>Active: <span className="font-semibold text-blue-600 dark:text-blue-400">{taskStats.active}</span></span>
          <span>Completed: <span className="font-semibold text-green-600 dark:text-green-400">{taskStats.completed}</span></span>
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <div className="flex rounded-lg border border-gray-300 dark:border-gray-600 p-1">
            {(['all', 'active', 'completed'] as const).map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={cn(
                  'px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 capitalize',
                  filter === filterType
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                )}
              >
                {filterType}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Check className="h-16 w-16 mx-auto mb-4 opacity-50" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {filter === 'completed' ? 'No completed tasks' : filter === 'active' ? 'No active tasks' : 'No tasks yet'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {filter === 'all' ? 'Add your first task to get started!' : `Switch to "All" to see all tasks.`}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredTasks.map((task, index) => (
            <Card 
              key={task.id} 
              hover 
              className={cn(
                'transition-all duration-300 transform',
                task.completed && 'opacity-75'
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={cn(
                        'w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200',
                        task.completed
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-400'
                      )}
                    >
                      {task.completed && <Check className="h-3 w-3" />}
                    </button>
                    <span 
                      className={cn(
                        'text-lg transition-all duration-200',
                        task.completed 
                          ? 'line-through text-gray-500 dark:text-gray-400' 
                          : 'text-gray-900 dark:text-white'
                      )}
                    >
                      {task.text}
                    </span>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteTask(task.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
