-- Add INSERT policy for workouts table
CREATE POLICY "Users can insert workouts for their training plans"
ON workouts
FOR INSERT
WITH CHECK (
  auth.uid() IN (
    SELECT user_id 
    FROM training_plans 
    WHERE id = workouts.training_plan_id
  )
);

-- Add UPDATE policy for workouts table
CREATE POLICY "Users can update their own workouts"
ON workouts
FOR UPDATE
USING (
  auth.uid() IN (
    SELECT user_id 
    FROM training_plans 
    WHERE id = workouts.training_plan_id
  )
);

-- Add DELETE policy for workouts table
CREATE POLICY "Users can delete their own workouts"
ON workouts
FOR DELETE
USING (
  auth.uid() IN (
    SELECT user_id 
    FROM training_plans 
    WHERE id = workouts.training_plan_id
  )
);